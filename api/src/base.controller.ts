import { Body } from '@nestjs/common'
import { DeepPartial, FindManyOptions } from 'typeorm'
import { BaseService } from './base.service'

export class BaseController<ServiceT extends BaseService<T, CreateDto>, T, CreateDto = T> {
  constructor(private readonly model: ServiceT) {}

  async create(createUserDto: CreateDto | CreateDto[]): Promise<DeepPartial<T> | DeepPartial<T>[]> {
    return Array.isArray(createUserDto)
      ? await this.model.createMany(createUserDto as CreateDto[])
      : await this.model.create(createUserDto as CreateDto)
  }

  async getAll(options?: FindManyOptions<T>): Promise<T[]> {
    return this.model.getAll(options)
  }

  async getById(id: number): Promise<T> {
    return this.model.getById(id)
  }

  async deleteById(id: string): Promise<void> {
    return this.model.deleteById(id)
  }

  async update(id: string, @Body() body: T): Promise<T> {
    return this.model.update(Number.parseInt(id), body)
  }
}
