import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('AuthorCreateWithoutPostsInput', { isAbstract: true })
export class AuthorCreateWithoutPostsInput {
  @NestJsGraphQL.Field(() => String)
  firstName!: string;

  @NestJsGraphQL.Field(() => String)
  lastName!: string;
}
