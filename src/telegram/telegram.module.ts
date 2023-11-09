import { TelegrafModule } from 'nestjs-telegraf'
import { Module } from '@nestjs/common'

import { ConfigService } from '@common/services'

import { SessionModule } from 'src/session/session.module'
import { SessionService } from 'src/session/session.service'

@Module({
  imports: [
    TelegrafModule.forRootAsync({
      imports: [SessionModule],
      inject: [SessionService, ConfigService],
      useFactory: (session: SessionService, config: ConfigService) => ({
        ...config.telegrafOptions(),
        middlewares: [session.createMongoDBSession()],
      }),
    }),
  ],
  providers: [],
})
export class TelegramModule {}
