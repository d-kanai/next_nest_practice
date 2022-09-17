import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('PostWhereUniqueInput', { isAbstract: true })
export class PostWhereUniqueInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id?: number | undefined;
}
