import { Action, Ctx, Start, Update } from 'nestjs-telegraf'
import { SceneContext } from 'telegraf/typings/scenes'
import { Markup } from 'telegraf'

import { LoggerService } from '@common/services'

import { ACTION_ABOUT_ME, ACTION_DATE, SCENES } from './telegram.constants'
import { MySceneContext } from './telegram.interfaces'

@Update()
export class TelegramUpdate {
  constructor(private readonly logger: LoggerService) {}

  @Start()
  async start(@Ctx() ctx: MySceneContext) {
    try {
      await ctx.reply('Привет!')
      await ctx.reply(
        'Меня зовут Эль и я будущая дочь самых лучших родителей 🥹',
        Markup.inlineKeyboard([
          [
            {
              text: ACTION_ABOUT_ME.text,
              callback_data: ACTION_ABOUT_ME.callback,
            },
            {
              text: ACTION_DATE.text,
              callback_data: ACTION_DATE.callback,
            },
          ],
        ]),
      )
    } catch (e) {
      this.logger.warn(e)
    }
  }

  @Action(ACTION_ABOUT_ME.callback)
  async startAboutMeScene(@Ctx() ctx: SceneContext) {
    try {
      await ctx.answerCbQuery()
      await ctx.scene.enter(SCENES.SCENE_CHOOSE_ABOUT_ME)
    } catch (e) {
      this.logger.warn(e)
    }
  }
}
