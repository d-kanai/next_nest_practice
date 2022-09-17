import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('AuthorWhereUniqueInput', { isAbstract: true })
export class AuthorWhereUniqueInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id?: number | undefined;
}
