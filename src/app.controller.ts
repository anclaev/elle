import { Controller, Get, Redirect } from '@nestjs/common'

@Controller()
export class AppController {
  constructor() {}

  @Get()
  @Redirect('https://t.me/ellechildbot', 301)
  redirectToBot(): string {
    return 'Redirect...'
  }
}
