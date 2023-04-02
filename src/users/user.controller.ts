import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import CreateUserDto from './dto/create-user.dto';
import { UserService } from './user.service';
import GetUserDto from './dto/get-user.dto';
import ChangeUserInfo from './dto/change-name.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get(':id')
  getUser(@Param() userDto: GetUserDto) {
    return this.userService.getUser(userDto);
  }

  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto);
  }

  @Put()
  changeName(@Body() userDto: ChangeUserInfo) {
    return this.userService.changeUserInfo(userDto);
  }
}
