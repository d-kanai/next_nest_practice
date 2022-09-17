import * as NestJsGraphql from '@nestjs/graphql'
import { AffectedRowsOutput } from '../common/outputs/AffectedRowsOutput.output'
import { Author } from '../models/author.model'
import {
  AggregateAuthorArgs,
  // CreateManyAuthorArgs,
  CreateOneAuthorArgs,
  DeleteManyAuthorArgs,
  DeleteOneAuthorArgs,
  FindFirstAuthorArgs,
  FindManyAuthorArgs,
  FindUniqueAuthorArgs,
  GroupByAuthorArgs,
  UpdateManyAuthorArgs,
  UpdateOneAuthorArgs,
  UpsertOneAuthorArgs
} from './author.args'
import { AuthorService } from './author.service'
import { AggregateAuthor } from './outputs/AggregateAuthor.output'
import { AuthorGroupBy } from './outputs/AuthorGroupBy.output'

@NestJsGraphql.Resolver(() => Author)
export class AuthorResolver {
  constructor(private readonly authorService: AuthorService) { }

  @NestJsGraphql.Query(() => Author, { nullable: false })
  findFirstAuthor(@NestJsGraphql.Args() args: FindFirstAuthorArgs) {
    return this.authorService.findFirst(args)
  }

  @NestJsGraphql.Query(() => Author, { nullable: false })
  findUniqueAuthor(@NestJsGraphql.Args() args: FindUniqueAuthorArgs) {
    return this.authorService.findUnique(args)
  }

  @NestJsGraphql.Query(() => [Author], { nullable: false })
  findManyAuthor(@NestJsGraphql.Args() args: FindManyAuthorArgs) {
    return this.authorService.findMany(args)
  }

  @NestJsGraphql.Query(() => [AuthorGroupBy], { nullable: false })
  groupByAuthor(@NestJsGraphql.Args() args: GroupByAuthorArgs) {
    return this.authorService.groupBy(args)
  }

  @NestJsGraphql.Query(() => AggregateAuthor, { nullable: false })
  aggregateAuthor(@NestJsGraphql.Args() args: AggregateAuthorArgs) {
    return this.authorService.aggregate(args)
  }

  @NestJsGraphql.Mutation(() => Author, { nullable: true })
  createAuthor(@NestJsGraphql.Args() args: CreateOneAuthorArgs) {
    return this.authorService.create(args)
  }

  // @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  // createManyAuthor(@NestJsGraphql.Args() args: CreateManyAuthorArgs) {
  //   return this.authorService.createMany(args)
  // }

  @NestJsGraphql.Mutation(() => Author, { nullable: true })
  updateAuthor(@NestJsGraphql.Args() args: UpdateOneAuthorArgs) {
    return this.authorService.update(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  updateManyAuthor(@NestJsGraphql.Args() args: UpdateManyAuthorArgs) {
    return this.authorService.updateMany(args)
  }

  @NestJsGraphql.Mutation(() => Author, { nullable: true })
  upsertAuthor(@NestJsGraphql.Args() args: UpsertOneAuthorArgs) {
    return this.authorService.upsert(args)
  }

  @NestJsGraphql.Mutation(() => Author, { nullable: true })
  deleteAuthor(@NestJsGraphql.Args() args: DeleteOneAuthorArgs) {
    return this.authorService.delete(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  deleteManyAuthor(@NestJsGraphql.Args() args: DeleteManyAuthorArgs) {
    return this.authorService.deleteMany(args)
  }
}

