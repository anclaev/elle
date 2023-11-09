import { Update } from 'telegraf/typings/core/types/typegram'
import { Context } from 'telegraf'
import e from 'express'

interface SessionData {
  choosen_auth?: string
}

export interface UserSessionContext extends Context {
  session?: SessionData
}

export type MySceneContext = Context & UserSessionContext
export type MySceneActionContext = MySceneContext & {
  update: Update.CallbackQueryUpdate
}

export interface TelegrafMessage {
  text: string
  message_id: number
  date: number
}

export interface TelegrafContactMessage extends TelegrafMessage {
  contact: {
    phone_number: string
  }
}
