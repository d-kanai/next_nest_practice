import * as NestJsGraphQL from "@nestjs/graphql";
import { SortOrder } from "../../common/enums";
import { PostOrderByRelationAggregateInput } from "../../post/inputs/PostOrderByRelationAggregateInput.input";

@NestJsGraphQL.InputType('AuthorOrderByWithRelationInput', { isAbstract: true })
export class AuthorOrderByWithRelationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  firstName?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  lastName?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => PostOrderByRelationAggregateInput, { nullable: true })
  posts?: PostOrderByRelationAggregateInput | undefined;
}
