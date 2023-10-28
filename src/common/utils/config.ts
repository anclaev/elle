import { ConfigModuleOptions } from '@nestjs/config'
import Joi from 'joi'

export const validationSchema = Joi.object({
  APP_PORT: Joi.number().required(),
  MONGO_USER: Joi.string().required(),
  MONGO_PASS: Joi.string().required(),
  MONGO_HOST: Joi.string().required(),
  MONGO_DB: Joi.string().required(),
  TELEGRAM_TOKEN: Joi.string().required(),
})

export const options: ConfigModuleOptions = {
  isGlobal: true,
  envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
  validationSchema,
}
