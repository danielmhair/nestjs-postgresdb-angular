import { HttpException, HttpStatus, UnprocessableEntityException } from '@nestjs/common'
import { DeepPartial, FindManyOptions, In } from 'typeorm'
import { NestRequest, NestResponse } from './base.controller.model'
import { TableErrors } from './constants'
import { EntityServiceBase } from './entity-base.service'

export abstract class BaseController<
  EntityServiceT extends EntityServiceBase<any>,
  GetT,
  ActionT = GetT,
> {
  constructor(
    private tableService: EntityServiceT,
  ) { }

  public async post(body: DeepPartial<ActionT | ActionT[]>): Promise<ActionT | ActionT[]> {
    return this.tableService.repo.create(body)
  }

  public async getAll(
    request: NestRequest<GetT, ActionT>,
    response: NestResponse,
    options?: FindManyOptions<GetT | ActionT | ActionT[] | GetT[]> & { includeCount: boolean, onlyCount: boolean }
  ): Promise<any> {
    response.set('Access-Control-Expose-Headers', 'X-Total-Count')
    response.set('Access-Control-Allow-Methods', 'DELETE, GET, HEAD, OPTIONS, PATCH, POST, PUT')

    if (options.onlyCount) {
      const count = await this.tableService.repo.count(options as FindManyOptions)
      return response.status(HttpStatus.OK).json({ count })
    }

    if (options.includeCount) {
      const [data, count] = await this.tableService.repo.findAndCount(options as FindManyOptions)
      response.set('X-Total-Count', count ? `${count}` : '0')
      return response.status(HttpStatus.OK).json(data)
    }

    const data = await this.tableService.repo.find(options as FindManyOptions)
    return response.status(HttpStatus.OK).json(data)
  }

  public async put(
    id: string,
    body: DeepPartial<ActionT>,
  ): Promise<any> {
    return this.tableService.repo.update(Number.parseInt(id), body as any)
  }

  public async getById(
    id: string,
  ): Promise<any> {
    if (!id || id === 'null') {
      throw new UnprocessableEntityException({
        name: TableErrors.MissingIdentifier,
        message: 'NOT FOUND',
        reason: 'No id was provided',
        from: 'getById',
      })
    }

    return this.tableService.repo.findOne({ id } as any)
  }

  public async delete(id: number): Promise<void> {
    await this.tableService.repo.remove({ id } as any)
  }

  public async deleteWhere(
    query: Partial<GetT>,
  ): Promise<void> {
    if (!query || Object.keys(query).length === 0) {
      throw new HttpException(
        'Action Not Allowed (query string required)',
        HttpStatus.FORBIDDEN,
      )
    }
    await this.tableService.repo.remove(query as any)
  }

  public async transformQueryDataBeforeGet(queryData: any): Promise<any> {
    return queryData
  }
}
