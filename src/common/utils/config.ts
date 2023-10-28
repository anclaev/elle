import { ConfigModuleOptions } from '@nestjs/config'

export const options: ConfigModuleOptions = {
  isGlobal: true,
  envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
}
