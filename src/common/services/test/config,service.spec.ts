import { ConfigService } from '../config.service'

describe('ConfigService', () => {
  const configService = new ConfigService()

  it('Get port number', () => {
    const port = configService.port()

    expect(typeof port).toEqual('number')
  })
})
