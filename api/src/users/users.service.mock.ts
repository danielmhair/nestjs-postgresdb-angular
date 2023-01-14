import { Module } from "@nestjs/common";
import { getRepositoryToken } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { UsersService } from "./users.service";

@Module({
  providers: [
    UsersService,
    {
      provide: getRepositoryToken(User),
      useValue: ,
    },
  ],
})
export class UsersModule {}