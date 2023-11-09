import { Action, Start, Update } from 'nestjs-telegraf'
import { Injectable } from '@nestjs/common'
import { Context } from 'telegraf'

import { StartButtons } from './app.buttons'

@Update()
@Injectable()
export class AppUpdate {
  @Start()
  async startCommand(ctx: Context) {
    await ctx.reply('Привет!')
    await ctx.reply(
      'Меня зовут Эль и я будущая дочь самых лучший родителей на свете 🥹',
      StartButtons(),
    )
  }

  @Action('actions')
  async getActions() {
    return 'Пока что я ничего не умею. Но совсем скоро научусь, обещаю!'
  }
}
