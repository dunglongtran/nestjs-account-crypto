import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APIModule } from './api/api.module';
import { AccountEntity } from './entities';
@Module({
  imports: [
    APIModule,
    MikroOrmModule.forRoot({
      // entities: ['../dist/entities/**.entity.ts'],
      entities: [AccountEntity],
      dbName: 'cryptoDev',
      type: 'mongo',
      clientUrl:
        'mongodb+srv://cryto_dev:KPYq1z3CM9YdcAp1@cluster0.uoizc.mongodb.net/cryptoDev?retryWrites=true&w=majority',
      autoLoadEntities: false,
      baseDir: __dirname,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
