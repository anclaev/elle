import { Start, Update } from 'nestjs-telegraf'
import { Injectable } from '@nestjs/common'
import { Context } from 'telegraf'

@Update()
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!'
  }

  @Start()
  async startCommand(ctx: Context) {
    await ctx.reply('Привет!')
  }
}
