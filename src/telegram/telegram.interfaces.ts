import { Update } from 'telegraf/typings/core/types/typegram'
import { SceneContext } from 'telegraf/typings/scenes'
import { Context } from 'telegraf'

interface SessionData {
  choosen_auth?: string
}

export interface UserSessionContext extends Context {
  session?: SessionData
}

export type MyContext = Context & UserSessionContext

export type MySceneContext = Context & SceneContext

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
