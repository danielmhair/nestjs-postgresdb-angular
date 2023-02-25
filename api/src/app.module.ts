import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
} from '@abacritt/angularx-social-login';
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersModule } from './users/users.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      // migrations: [PopulateDataExample1674432771960],
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    SocialLoginModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              JSON.parse(process.env.GOOGLE_LOGIN_CREDENTIALS || 'null')?.web?.clientId || ''
            )
          },
        ],
        onError: (err) => {
          console.error('Error from app.module for social auth service config')
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    },
  ],
})
export class AppModule {}
