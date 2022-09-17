import * as NestJsGraphQL from "@nestjs/graphql";
import { AuthorCreateWithoutPostsInput } from "../../author/inputs/AuthorCreateWithoutPostsInput.input";
import { AuthorWhereUniqueInput } from "../../author/inputs/AuthorWhereUniqueInput.input";

@NestJsGraphQL.InputType('AuthorCreateOrConnectWithoutPostsInput', { isAbstract: true })
export class AuthorCreateOrConnectWithoutPostsInput {
  @NestJsGraphQL.Field(() => AuthorWhereUniqueInput)
  where!: AuthorWhereUniqueInput;

  @NestJsGraphQL.Field(() => AuthorCreateWithoutPostsInput)
  create!: AuthorCreateWithoutPostsInput;
}
