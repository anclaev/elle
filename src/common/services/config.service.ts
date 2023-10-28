import { ConfigService as RootConfigService } from '@nestjs/config'
import { MongooseModuleFactoryOptions } from '@nestjs/mongoose'
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
    return Number(this.get('APP_PORT'))
  }

  dbOptions(): MongooseModuleFactoryOptions {
    const db = {
      host: this.get<string>('MONGO_HOST'),
      port: this.get<number>('MONGO_PORT'),
      user: this.get<string>('MONGO_USER'),
      password: this.get<string>('MONGO_PASS'),
      name: this.get<string>('MONGO_DB'),
    }

    const options: MongooseModuleFactoryOptions = {
      uri: `mongodb://${db.host}:${db.port}/${db.name}`,
    }
    return options
  }
}
