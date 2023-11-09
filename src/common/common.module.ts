import { Global, Module } from '@nestjs/common'

import { ConfigService, LoggerService, TelegramService } from './services'

@Global()
@Module({
  providers: [ConfigService, LoggerService, TelegramService],
  exports: [ConfigService, LoggerService, TelegramService],
})
export class CommonModule {}
