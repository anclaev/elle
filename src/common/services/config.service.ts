import { ConfigService as RootConfigService } from '@nestjs/config'
import { MongooseModuleFactoryOptions } from '@nestjs/mongoose'
import { TelegrafModuleOptions } from 'nestjs-telegraf'
import { Injectable } from '@nestjs/common'

import { IConfig } from '../interfaces/config'

@Injectable()
export class ConfigService extends RootConfigService {
  constructor() {
    super()
  }

  val<T>(value: keyof IConfig): T {
    return this.get<T>(value) as T
  }

  port(): number {
    return Number(this.val('APP_PORT'))
  }

  dbOptions(): MongooseModuleFactoryOptions {
    const db = {
      host: this.val<string>('MONGO_HOST'),
      port: this.val<number>('MONGO_PORT'),
      user: this.val<string>('MONGO_USER'),
      password: this.val<string>('MONGO_PASS'),
      name: this.val<string>('MONGO_DB'),
    }

    const options: MongooseModuleFactoryOptions = {
      uri: `mongodb://${db.host}:${db.port}/${db.name}`,
      authSource: 'admin',
      auth: {
        password: db.password,
        username: db.user,
      },
    }
    return options
  }

  telegrafOptions(): TelegrafModuleOptions {
    const options: TelegrafModuleOptions = {
      token: this.val<string>('TELEGRAM_TOKEN'),
    }

    return options
  }
}
