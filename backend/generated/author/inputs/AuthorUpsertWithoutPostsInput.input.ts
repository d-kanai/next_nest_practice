import * as NestJsGraphQL from "@nestjs/graphql";
import { AuthorCreateWithoutPostsInput } from "../../author/inputs/AuthorCreateWithoutPostsInput.input";
import { AuthorUpdateWithoutPostsInput } from "../../author/inputs/AuthorUpdateWithoutPostsInput.input";

@NestJsGraphQL.InputType('AuthorUpsertWithoutPostsInput', { isAbstract: true })
export class AuthorUpsertWithoutPostsInput {
  @NestJsGraphQL.Field(() => AuthorUpdateWithoutPostsInput)
  update!: AuthorUpdateWithoutPostsInput;

  @NestJsGraphQL.Field(() => AuthorCreateWithoutPostsInput)
  create!: AuthorCreateWithoutPostsInput;
}
