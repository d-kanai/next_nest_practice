import { UseGuards, Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateCatDto, UpdateCatDto, ListAllEntities } from './cats.dto';
import { CatsService } from './cats.service';
import { ParseIntPipe, HttpStatus, HttpException } from '@nestjs/common';
import { RolesGuard } from 'src/common/guard/roles.guard';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    console.log(createCatDto)
    console.log(createCatDto.name)
    this.catsService.create(createCatDto);
  }

  @Get()
  @UseGuards(RolesGuard)
  findAll(@Query() query: ListAllEntities) {
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
