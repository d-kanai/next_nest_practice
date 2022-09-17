import { Module } from '@nestjs/common'
import { PrismaService } from '../../prisma.service'
import { AuthorResolver } from './author.resolver'
import { AuthorService } from './author.service'

@Module({
  providers: [AuthorResolver, AuthorService, PrismaService]
})
export class AuthorModule { }

