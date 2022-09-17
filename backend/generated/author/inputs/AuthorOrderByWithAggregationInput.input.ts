import * as NestJsGraphQL from "@nestjs/graphql";
import { AuthorAvgOrderByAggregateInput } from "../../author/inputs/AuthorAvgOrderByAggregateInput.input";
import { AuthorCountOrderByAggregateInput } from "../../author/inputs/AuthorCountOrderByAggregateInput.input";
import { AuthorMaxOrderByAggregateInput } from "../../author/inputs/AuthorMaxOrderByAggregateInput.input";
import { AuthorMinOrderByAggregateInput } from "../../author/inputs/AuthorMinOrderByAggregateInput.input";
import { AuthorSumOrderByAggregateInput } from "../../author/inputs/AuthorSumOrderByAggregateInput.input";
import { SortOrder } from "../../common/enums";

@NestJsGraphQL.InputType('AuthorOrderByWithAggregationInput', { isAbstract: true })
export class AuthorOrderByWithAggregationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  firstName?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  lastName?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => AuthorCountOrderByAggregateInput, { nullable: true })
  _count?: AuthorCountOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => AuthorAvgOrderByAggregateInput, { nullable: true })
  _avg?: AuthorAvgOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => AuthorMaxOrderByAggregateInput, { nullable: true })
  _max?: AuthorMaxOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => AuthorMinOrderByAggregateInput, { nullable: true })
  _min?: AuthorMinOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => AuthorSumOrderByAggregateInput, { nullable: true })
  _sum?: AuthorSumOrderByAggregateInput | undefined;
}
