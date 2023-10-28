import { Global, Module } from '@nestjs/common'

import { ConfigService, LoggerService } from './services'

@Global()
@Module({
  providers: [ConfigService, LoggerService],
  exports: [ConfigService, LoggerService],
})
export class CommonModule {}
