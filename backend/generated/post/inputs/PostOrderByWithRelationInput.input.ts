import * as NestJsGraphQL from "@nestjs/graphql";
import { AuthorOrderByWithRelationInput } from "../../author/inputs/AuthorOrderByWithRelationInput.input";
import { SortOrder } from "../../common/enums";

@NestJsGraphQL.InputType('PostOrderByWithRelationInput', { isAbstract: true })
export class PostOrderByWithRelationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  title?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  published?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => AuthorOrderByWithRelationInput, { nullable: true })
  author?: AuthorOrderByWithRelationInput | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  authorId?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  votes?: "asc" | "desc" | undefined;
}
