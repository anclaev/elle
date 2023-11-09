import { ConsoleLogger, Injectable } from '@nestjs/common'

@Injectable()
export class LoggerService extends ConsoleLogger {
  constructor(ctx?: string) {
    super(ctx || 'Elle Bot')
  }

  ctx() {
    return this.context
  }

  setCtx(ctx: string) {
    this.context = ctx
  }
}
