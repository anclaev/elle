import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule } from '@nestjs/config'
import { Module } from '@nestjs/common'

import { CommonModule } from './common/common.module'
import { ConfigService } from '@common/services'

import { AppController } from './app.controller'
import { AppService } from './app.service'

import { options } from '@utils/config'

@Module({
  imports: [
    ConfigModule.forRoot(options),
    CommonModule,
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => config.dbOptions(),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
