import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('AuthorAvgAggregate', { isAbstract: true })
export class AuthorAvgAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Float, { nullable: true })
  id!: number | null;
}
