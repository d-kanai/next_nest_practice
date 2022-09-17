import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('AuthorSumAggregate', { isAbstract: true })
export class AuthorSumAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id!: number | null;
}
