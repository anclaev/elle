import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Types } from 'mongoose'
import { SceneContext } from 'telegraf/typings/scenes'

export type SessionDocument = Session & Document

@Schema()
export class Session {
  _id: Types.ObjectId

  @Prop({ required: true, type: Number })
  userId: number

  @Prop({ type: Object })
  session: SceneContext['session']

  @Prop({ required: true, type: Date, default: Date.now() })
  createdAt: Date
}

export const SessionSchema = SchemaFactory.createForClass(Session)
