import * as NestJsGraphQL from "@nestjs/graphql";
import { AuthorCount } from "../author/outputs/AuthorCount.output";
import { Post } from "../models/post.model";

@NestJsGraphQL.ObjectType('Author', { isAbstract: true })
export class Author {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => String)
  firstName!: string;

  @NestJsGraphQL.Field(() => String)
  lastName!: string;

  posts?: Post[];

  @NestJsGraphQL.Field(() => AuthorCount, { nullable: true })
  _count?: AuthorCount | null;
}
