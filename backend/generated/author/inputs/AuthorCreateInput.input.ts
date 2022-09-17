import * as NestJsGraphQL from "@nestjs/graphql";
import { PostCreateNestedManyWithoutAuthorInput } from "../../post/inputs/PostCreateNestedManyWithoutAuthorInput.input";

@NestJsGraphQL.InputType('AuthorCreateInput', { isAbstract: true })
export class AuthorCreateInput {
  @NestJsGraphQL.Field(() => String)
  firstName!: string;

  @NestJsGraphQL.Field(() => String)
  lastName!: string;

  @NestJsGraphQL.Field(() => PostCreateNestedManyWithoutAuthorInput, { nullable: true })
  posts?: PostCreateNestedManyWithoutAuthorInput | undefined;
}
