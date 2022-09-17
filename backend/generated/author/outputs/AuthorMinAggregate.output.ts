import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('AuthorMinAggregate', { isAbstract: true })
export class AuthorMinAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id!: number | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  firstName!: string | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  lastName!: string | null;
}
