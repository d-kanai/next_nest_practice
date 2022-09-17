import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('AuthorCountAggregate', { isAbstract: true })
export class AuthorCountAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  firstName!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  lastName!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  _all!: number;
}
