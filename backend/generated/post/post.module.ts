import { Module } from '@nestjs/common'
import { PrismaService } from '../../prisma.service'
import PostRepository from './post.repository'
import { PostResolver } from './post.resolver'
import { PostService } from './post.service'

@Module({
  providers: [
    PostResolver,
    PostService,
    PrismaService,
    PostRepository
  ]
})
export class PostModule { }

