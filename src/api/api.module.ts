import { Module } from '@nestjs/common';
import * as CONTROLLERS from './controllers';
import { MockService } from '../services';
@Module({
  controllers: [...Object.values(CONTROLLERS)],
  providers: [MockService],
})
export class APIModule {}
