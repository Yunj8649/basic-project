import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '211.42.152.249',
      port: 3306,
      username: 'admin',
      password: 'Dkqlsqkqh12!',
      database: 'testDB',
      entities: [User],
      autoLoadEntities: true,
      retryAttempts: 10, // 데이터베이스 연결 시도 횟수
      retryDelay: 3000, // 연결 재시도 간격(ms)(기본값: 3000)
      synchronize: true, // 운영환경에서는 false로 변경 필요
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
