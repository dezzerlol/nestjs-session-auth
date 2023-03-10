import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { UserController } from './user.controller'
import { User } from './user.model'
import { UserService } from './user.service'

@Module({
  controllers: [UserController],
  imports: [SequelizeModule.forFeature([User])],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
