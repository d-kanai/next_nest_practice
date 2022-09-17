import * as NestJsGraphQL from "@nestjs/graphql";
import { AuthorCreateNestedOneWithoutPostsInput } from "../../author/inputs/AuthorCreateNestedOneWithoutPostsInput.input";

@NestJsGraphQL.InputType('PostCreateInput', { isAbstract: true })
export class PostCreateInput {
  @NestJsGraphQL.Field(() => String)
  title!: string;

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  published?: boolean | undefined;

  @NestJsGraphQL.Field(() => AuthorCreateNestedOneWithoutPostsInput)
  author!: AuthorCreateNestedOneWithoutPostsInput;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  votes!: number;
}
