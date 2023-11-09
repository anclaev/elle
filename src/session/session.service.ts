import { SceneContext } from 'telegraf/typings/scenes'
import { InjectModel } from '@nestjs/mongoose'
import { Injectable } from '@nestjs/common'
import { Middleware } from 'telegraf'
import { Model } from 'mongoose'

import { TelegramUser } from 'src/telegram/telegram.interfaces'

import { LoggerService } from '@common/services'

import { Session } from './session.schema'

const EMPTY_SESSION = { __scenes: {} }

@Injectable()
export class SessionService {
  constructor(
    @InjectModel(Session.name)
    private readonly sessionModel: Model<Session>,
    private readonly logger: LoggerService,
  ) {}

  async getSession(userId: number): Promise<SceneContext['session']> {
    try {
      const user = await this.sessionModel.findOne({ userId })

      if (user) {
        return user.session
      } else {
        return EMPTY_SESSION
      }
    } catch (e) {
      this.logger.warn(e)
      return EMPTY_SESSION
    }
  }

  async saveSession(
    session: SceneContext['session'],
    { userId, ...userData }: TelegramUser,
  ) {
    try {
      const user = await this.sessionModel.findOne({ userId })

      if (user) {
        user.session = session

        if (user.firstname) user.firstname = userData.first_name!
        if (user.lastname) user.lastname = userData.last_name!
        if (user.username) user.username = userData.username!

        await user.save()
      } else {
        const newUser = new this.sessionModel({
          userId,
          session,
          firstname: userData.first_name,
          lastname: userData.last_name,
          username: userData.username,
        })

        await newUser.save()
      }
    } catch (e) {
      this.logger.warn(e)
    }
  }

  createMongoDBSession(): Middleware<SceneContext> {
    return async (ctx, next) => {
      const userId = ctx.chat!.id
      const userData = ctx.from

      let session: SceneContext['session'] = EMPTY_SESSION

      Object.defineProperty(ctx, 'session', {
        get: function () {
          return session
        },
        set: function (newValue) {
          session = Object.assign({}, newValue)
        },
      })

      session = (await this.getSession(userId)) || EMPTY_SESSION

      await next()

      await this.saveSession(session, {
        userId,
        first_name: userData?.first_name,
        last_name: userData?.last_name,
        username: userData?.username,
      })
    }
  }
}
