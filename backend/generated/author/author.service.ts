import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { PrismaService } from '../../prisma.service'

@Injectable()
export class AuthorService {
  constructor(private prisma: PrismaService) { }

  async findFirst(args: Prisma.AuthorFindFirstArgs) {
    return await this.prisma.author.findFirst(args)
  }

  findUnique(args: Prisma.AuthorFindUniqueArgs) {
    return this.prisma.author.findUnique(args)
  }

  findMany(args: Prisma.AuthorFindManyArgs) {
    return this.prisma.author.findMany(args)
  }

  groupBy(args: Prisma.AuthorGroupByArgs) {
    // @ts-ignore
    return this.prisma.author.groupBy(args)
  }

  aggregate(args: Prisma.AuthorAggregateArgs) {
    return this.prisma.author.aggregate(args)
  }

  create(args: Prisma.AuthorCreateArgs) {
    return this.prisma.author.create(args)
  }

  // createMany(args: Prisma.AuthorCreateManyArgs) {
  //   return this.prisma.author.createMany(args)
  // }

  update(args: Prisma.AuthorUpdateArgs) {
    return this.prisma.author.update(args)
  }

  updateMany(args: Prisma.AuthorUpdateManyArgs) {
    return this.prisma.author.updateMany(args)
  }

  upsert(args: Prisma.AuthorUpsertArgs) {
    return this.prisma.author.upsert(args)
  }

  delete(args: Prisma.AuthorDeleteArgs) {
    return this.prisma.author.delete(args)
  }

  deleteMany(args: Prisma.AuthorDeleteManyArgs) {
    return this.prisma.author.deleteMany(args)
  }
}
