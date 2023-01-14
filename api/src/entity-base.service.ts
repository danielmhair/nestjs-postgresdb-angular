import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Sequelize } from 'sequelize-typescript'
import { FindManyOptions, Repository } from 'typeorm'
import { User } from './users/user.entity'

export class EntityServiceBase<T> {
  constructor(
    public repo: Repository<T>,
  ) {}
}