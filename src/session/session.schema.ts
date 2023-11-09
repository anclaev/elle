import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Types } from 'mongoose'
import { SceneContext } from 'telegraf/typings/scenes'

@Schema()
export class TelegramSession {
  _id: Types.ObjectId

  @Prop({ required: true, type: Number })
  userId: number

  @Prop({ type: Object })
  session: SceneContext['session']

  @Prop({ required: true, type: Date, default: Date.now() })
  createdAt: Date
}

export const TelegramSessionSchema =
  SchemaFactory.createForClass(TelegramSession)
