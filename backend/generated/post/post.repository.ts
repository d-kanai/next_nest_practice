import { Injectable } from '@nestjs/common'
import {plainToInstance} from "class-transformer";
import { Post } from '../models/post.model'
import { PrismaService } from '../../prisma.service'

@Injectable()
export default class PostRepository {

  constructor(private prisma: PrismaService) { }

  async findFirst(args:any): Promise<Post> {
    const record:any = await this.prisma.post.findFirst({...args, include: {author: true}})
    if(!record) {
      throw new Error("error")
    }
    // return plainToInstance(Post, record)
    return new Post(
      record.id,
      record.title,
      record.published,
      record.author,
      record.votes
    )
  }

}

