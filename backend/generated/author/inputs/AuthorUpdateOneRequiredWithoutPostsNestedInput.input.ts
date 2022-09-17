import * as NestJsGraphQL from "@nestjs/graphql";
import { AuthorCreateOrConnectWithoutPostsInput } from "../../author/inputs/AuthorCreateOrConnectWithoutPostsInput.input";
import { AuthorCreateWithoutPostsInput } from "../../author/inputs/AuthorCreateWithoutPostsInput.input";
import { AuthorUpdateWithoutPostsInput } from "../../author/inputs/AuthorUpdateWithoutPostsInput.input";
import { AuthorUpsertWithoutPostsInput } from "../../author/inputs/AuthorUpsertWithoutPostsInput.input";
import { AuthorWhereUniqueInput } from "../../author/inputs/AuthorWhereUniqueInput.input";

@NestJsGraphQL.InputType('AuthorUpdateOneRequiredWithoutPostsNestedInput', { isAbstract: true })
export class AuthorUpdateOneRequiredWithoutPostsNestedInput {
  @NestJsGraphQL.Field(() => AuthorCreateWithoutPostsInput, { nullable: true })
  create?: AuthorCreateWithoutPostsInput | undefined;

  @NestJsGraphQL.Field(() => AuthorCreateOrConnectWithoutPostsInput, { nullable: true })
  connectOrCreate?: AuthorCreateOrConnectWithoutPostsInput | undefined;

  @NestJsGraphQL.Field(() => AuthorUpsertWithoutPostsInput, { nullable: true })
  upsert?: AuthorUpsertWithoutPostsInput | undefined;

  @NestJsGraphQL.Field(() => AuthorWhereUniqueInput, { nullable: true })
  connect?: AuthorWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => AuthorUpdateWithoutPostsInput, { nullable: true })
  update?: AuthorUpdateWithoutPostsInput | undefined;
}
