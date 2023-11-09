import { LoggerService } from '../logger.service'

describe('LoggerService', () => {
  const loggerService = new LoggerService()

  it('Set context', () => {
    loggerService.setCtx('Test')
    expect(loggerService.ctx()).toStrictEqual('Test')
  })
})
