import { Markup } from 'telegraf'

export const ActionsButton = Markup.button.callback(
  'Чем вам помочь?',
  'actions',
)

export const StartButtons = () =>
  Markup.inlineKeyboard([ActionsButton], { columns: 1 })
