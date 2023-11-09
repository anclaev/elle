import { TelegrafModule } from 'nestjs-telegraf'
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule } from '@nestjs/config'
import { Module } from '@nestjs/common'

import { SessionModule } from './session/session.module'
import { CommonModule } from '@common/common.module'
import { ConfigService } from '@common/services'

import { AppController } from './app.controller'
import { AppUpdate } from './app.update'

import { options } from '@utils/config'

@Module({
  imports: [
    ConfigModule.forRoot(options),
    CommonModule,
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => config.dbOptions(),
    }),
    SessionModule,
    TelegrafModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => config.telegrafOptions(),
    }),
  ],
  controllers: [AppController],
  providers: [AppUpdate],
})
export class AppModule {}
