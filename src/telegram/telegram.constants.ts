import { MyAction } from './telegram.interfaces'

export enum SCENES {
  SCENE_CHOOSE_ABOUT_ME = 'SCENE_CHOOSE_ABOUT_ME',
  SCENE_CHOOSE_AUTH = 'SCENE_CHOOSE_AUTH',
}

export const ACTION_ABOUT_ME_OK: MyAction = {
  text: 'Хорошо',
  callback: 'about_ok',
}
export const ACTION_ABOUT_ME: MyAction = {
  text: 'Что я умею?',
  callback: 'about',
}

export const ACTION_DATE: MyAction = {
  text: 'Даты',
  callback: 'date',
}

export const ADMINS = [6035210835, 904575701]
