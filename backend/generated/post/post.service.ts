import { Injectable } from '@nestjs/common'
import { Post } from '../models/post.model'
import { Prisma } from '@prisma/client'
import { PrismaService } from '../../prisma.service'
import PostRepository from './post.repository'

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService, private postRepository: PostRepository) { }

  async findFirst(args: Prisma.PostFindFirstArgs): Promise<Post> {
    return await this.postRepository.findFirst(args)
  }

  findUnique(args: Prisma.PostFindUniqueArgs) {
    return this.prisma.post.findUnique(args)
  }

  findMany(args: Prisma.PostFindManyArgs) {
    return this.prisma.post.findMany(args)
  }

  groupBy(args: Prisma.PostGroupByArgs) {
    // @ts-ignore
    return this.prisma.post.groupBy(args)
  }

  aggregate(args: Prisma.PostAggregateArgs) {
    return this.prisma.post.aggregate(args)
  }

  create(args: Prisma.PostCreateArgs) {
    return this.prisma.post.create(args)
  }

  // createMany(args: Prisma.PostCreateManyArgs) {
  //   return this.prisma.post.createMany(args)
  // }

  update(args: Prisma.PostUpdateArgs) {
    return this.prisma.post.update(args)
  }

  updateMany(args: Prisma.PostUpdateManyArgs) {
    return this.prisma.post.updateMany(args)
  }

  upsert(args: Prisma.PostUpsertArgs) {
    return this.prisma.post.upsert(args)
  }

  delete(args: Prisma.PostDeleteArgs) {
    return this.prisma.post.delete(args)
  }

  deleteMany(args: Prisma.PostDeleteManyArgs) {
    return this.prisma.post.deleteMany(args)
  }
}
