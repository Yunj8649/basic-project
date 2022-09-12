import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'testDB',
      entities: [User],
      autoLoadEntities: true,
      retryAttempts: 10, // 데이터베이스 연결 시도 횟수
      retryDelay: 3000, // 연결 재시도 간격(ms)(기본값: 3000)
      synchronize: true, // 운영환경에서는 false로 변경 필요
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
