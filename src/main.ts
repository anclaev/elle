import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

import { ConfigService, LoggerService } from '@common/services'

const bootstrap = async (): Promise<void> => {
  const app = await NestFactory.create(AppModule)

  const config = app.get(ConfigService)
  const logger = app.get(LoggerService)

  const port = config.val<number>('APP_PORT')

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  )

  await app.listen(port).finally(() => {
    logger.log(`Successfully launched on ${port} port!`)
  })
}

bootstrap()
