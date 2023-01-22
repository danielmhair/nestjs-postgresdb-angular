import { DeepPartial, FindManyOptions, FindOneOptions, Repository } from 'typeorm'

export class BaseService<T, CreateDto> {
  constructor(protected readonly usersRepository: Repository<T>) {}

  async create(createUserDto: CreateDto): Promise<DeepPartial<T>[]> {
    return this.usersRepository.save(createUserDto as any)
  }

  async createMany(createUserDto: CreateDto[]): Promise<T[]> {
    return this.usersRepository.create(createUserDto as any)
  }

  async getAll(options?: FindManyOptions<T>): Promise<T[]> {
    return this.usersRepository.find(options)
  }

  async getById(id: number): Promise<T> {
    return this.usersRepository.findOneBy({ id: id } as any)
  }

  async getOne(options?: FindOneOptions<T>): Promise<T> {
    return this.usersRepository.findOne(options)
  }

  async update(id: number, user: DeepPartial<T>): Promise<T> {
    return this.usersRepository.save({ id, ...user })
  }

  async deleteById(id: string): Promise<void> {
    await this.usersRepository.delete(id)
  }

  async deleteWhere(options?: Pick<FindOneOptions<T>, 'where'>): Promise<void> {
    const users = await this.usersRepository.find({ where: options.where, select: ['id'] as any[] })
    await this.usersRepository.remove(users)
  }
}
