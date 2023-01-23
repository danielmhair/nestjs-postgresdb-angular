import { Test, TestingModule } from "@nestjs/testing"
import { AppModule } from "./app.module"
import { UsersService } from "./users/users.service"

describe('Postgres DB', () => {
  let usersService: UsersService
  let app: TestingModule

  beforeEach(async () => {
    app = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()
    usersService = app.get<UsersService>(UsersService)
  })

  afterEach(async () => {
    await app.close()
  })

  it('should populate users', async () => {
    await usersService.deleteWhere({ where: { isActive: true } })
 
    await usersService.create({ firstName: 'Dan', lastName: 'Hair', email: 'danielmhair@gmail.com' })
    await usersService.create({ firstName: 'Mark', lastName: 'Mena', email: 'marktavius@gmail.com' })
  })
})