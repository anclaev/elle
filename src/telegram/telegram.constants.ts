export enum SCENES {
  SCENE_CHOOSE_ABOUT_ME = 'SCENE_CHOOSE_ABOUT_ME',
  SCENE_CHOOSE_AUTH = 'SCENE_CHOOSE_AUTH',
}

export const ACTION_ABOUT_ME_OK = { text: 'Хорошо', callback: 'about_ok' }
export const ACTION_ABOUT_ME = { text: 'Что я умею?', callback: 'about' }
export const ACTION_AUTH = { text: 'Войти', callback: 'login' }
