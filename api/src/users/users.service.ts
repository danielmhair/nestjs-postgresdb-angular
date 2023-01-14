import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Sequelize } from 'sequelize-typescript'
import { Repository } from 'typeorm'
import { EntityServiceBase } from '../entity-base.service'
import { User } from './user.entity'

@Injectable()
export class UsersService extends EntityServiceBase<User> {
  constructor(
    @InjectRepository(User) repo: Repository<User>,
  ) { super(repo)}
}