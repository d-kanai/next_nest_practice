import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('AuthorCount', { isAbstract: true })
export class AuthorCount {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  posts!: number;
}
