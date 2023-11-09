import { MongooseModule } from '@nestjs/mongoose'
import { Module } from '@nestjs/common'

import { Session, SessionSchema } from './session.schema'
import { SessionService } from './session.service'

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Session.name,
        schema: SessionSchema,
      },
    ]),
  ],
  providers: [SessionService],
  exports: [SessionService],
})
export class SessionModule {}
