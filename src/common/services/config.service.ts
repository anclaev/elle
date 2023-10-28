import { ConfigService as RootConfigService } from '@nestjs/config'
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
}
