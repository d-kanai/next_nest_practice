import * as NestJsGraphQL from "@nestjs/graphql";
import { Author } from "../models/author.model";

@NestJsGraphQL.ObjectType('Post', { isAbstract: true })
export class Post {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => String)
  title!: string;

  @NestJsGraphQL.Field(() => Boolean)
  published!: boolean;

  author?: Author;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  authorId!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  votes!: number;
}
