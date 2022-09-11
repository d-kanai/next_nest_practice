import { UseInterceptors ,UseGuards, Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateCatDto, UpdateCatDto, ListAllEntities } from './cats.dto';
import { CatsService } from './cats.service';
import { ParseIntPipe, HttpStatus, HttpException } from '@nestjs/common';
import { RolesGuard } from 'src/common/guard/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { SessionUser } from 'src/common/decorators/sessionuser.decorator';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  @Roles('admin')
  create(@SessionUser() sessionUser: any, @Body() createCatDto: CreateCatDto) {
    console.log(sessionUser)
    this.catsService.create(createCatDto);
  }


  @Get()
  @UseGuards(RolesGuard)
  findAll(@SessionUser('name') sessionUser: any, @Query() query: ListAllEntities) {
    console.log(sessionUser)
    return this.catsService.findAll()
    // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    // return this.catsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }

  @Post()
  createBulk(@Body() createCatDtos: CreateCatDto[]) {
    return 'This action adds new users';
  }
}
