import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getTypeOrmConfig } from './config/typeorm.config';
import { CoursesModule } from './modules/courses/courses.module';
import { LessonsModule } from './modules/lessons/lessons.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { ProgressModule } from './modules/progress/progress.module';
import { QuizzesModule } from './modules/quizzes/quizzes.module';
import { ChatModule } from './modules/chat/chat.module';
import { BlogModule } from './modules/blog/blog.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getTypeOrmConfig,
    }),

    UsersModule,
    AuthModule,
    CoursesModule,
    LessonsModule,
    PaymentsModule,
    ProgressModule,
    QuizzesModule,
    ChatModule,
    BlogModule,
  ],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
