import { options } from './config'

describe('Utils', () => {
  it('Get config options', () => {
    expect(options).toMatchObject({
      isGlobal: true,
      envFilePath: '.env.test',
    })
  })
})
