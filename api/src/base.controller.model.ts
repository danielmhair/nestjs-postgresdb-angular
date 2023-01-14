import { Request, Response } from 'express'

export interface NestResponse extends Response {}
export interface NestRequest<GetT = any, ActionT = GetT> extends Request {
  query: NestRequestQuery
  body: GetT | ActionT | GetT[] | ActionT[]
  // user?: UserClaim
}

export type NestRequestQuery = any