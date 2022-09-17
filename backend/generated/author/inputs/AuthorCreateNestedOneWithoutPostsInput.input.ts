import * as NestJsGraphQL from "@nestjs/graphql";
import { AuthorCreateOrConnectWithoutPostsInput } from "../../author/inputs/AuthorCreateOrConnectWithoutPostsInput.input";
import { AuthorCreateWithoutPostsInput } from "../../author/inputs/AuthorCreateWithoutPostsInput.input";
import { AuthorWhereUniqueInput } from "../../author/inputs/AuthorWhereUniqueInput.input";

@NestJsGraphQL.InputType('AuthorCreateNestedOneWithoutPostsInput', { isAbstract: true })
export class AuthorCreateNestedOneWithoutPostsInput {
  @NestJsGraphQL.Field(() => AuthorCreateWithoutPostsInput, { nullable: true })
  create?: AuthorCreateWithoutPostsInput | undefined;

  @NestJsGraphQL.Field(() => AuthorCreateOrConnectWithoutPostsInput, { nullable: true })
  connectOrCreate?: AuthorCreateOrConnectWithoutPostsInput | undefined;

  @NestJsGraphQL.Field(() => AuthorWhereUniqueInput, { nullable: true })
  connect?: AuthorWhereUniqueInput | undefined;
}
