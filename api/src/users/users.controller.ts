import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, Query, Req, Res } from '@nestjs/common'
import { NestRequest, NestResponse } from 'src/base.controller.model'
import { BaseController } from '../base.controller'
import { User } from './user.entity'
import { UsersService } from './users.service'

// @UseGuards(...)
// @UseInterceptors(...)
@Controller('users')
export class UsersController extends BaseController<UsersService, User> {
  constructor(service: UsersService) {
    super(service)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  public async post(
    @Body() body: User,
  ): Promise<any> {
    return super.post(body)
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  public async getAll(
    @Req() request: NestRequest<User>,
      @Res() response: NestResponse,
      @Query() query: any, // TODO: Add typing
  ): Promise<any> {
    return super.getAll(request, response, { includeCount: true, ...query })
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  public async getById(
      @Param('id') id: string, 
  ): Promise<any> {
    return super.getById(id)
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  public async put(
      @Param('id') id: string,
      @Body() body: User,
  ): Promise<any> {
    return super.put(id, body)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async delete(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<void> {
    return super.delete(id)
  }

  @Delete()
  @HttpCode(HttpStatus.NO_CONTENT)
  public async deleteWhere(
    @Query() query: User,
  ): Promise<any> {
    return super.deleteWhere(query)
  }
}