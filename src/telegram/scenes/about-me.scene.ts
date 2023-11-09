import { Action, Ctx, Scene, SceneEnter } from 'nestjs-telegraf'
import { Markup } from 'telegraf'

import { MySceneActionContext, MySceneContext } from '../telegram.interfaces'
import { ACTION_ABOUT_ME_OK, SCENES } from '../telegram.constants'

@Scene(SCENES.SCENE_CHOOSE_ABOUT_ME)
export class ChooseAboutMeScene {
  @SceneEnter()
  async enter(@Ctx() ctx: MySceneContext) {
    await ctx.reply(
      'Пока что я ничего не умею. Но совсем скоро научусь!',
      Markup.inlineKeyboard([
        [
          {
            text: ACTION_ABOUT_ME_OK.text,
            callback_data: ACTION_ABOUT_ME_OK.callback,
          },
        ],
      ]),
    )
  }

  @Action(ACTION_ABOUT_ME_OK.callback)
  async onAnswer(@Ctx() ctx: MySceneActionContext) {
    await ctx.scene.leave()
  }
}
