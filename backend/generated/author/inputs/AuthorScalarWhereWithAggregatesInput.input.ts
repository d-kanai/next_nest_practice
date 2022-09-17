import * as NestJsGraphQL from "@nestjs/graphql";
import { IntWithAggregatesFilter } from "../../common/inputs/IntWithAggregatesFilter.input";
import { StringWithAggregatesFilter } from "../../common/inputs/StringWithAggregatesFilter.input";

@NestJsGraphQL.InputType('AuthorScalarWhereWithAggregatesInput', { isAbstract: true })
export class AuthorScalarWhereWithAggregatesInput {
  @NestJsGraphQL.Field(() => [AuthorScalarWhereWithAggregatesInput], { nullable: true })
  AND?: AuthorScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [AuthorScalarWhereWithAggregatesInput], { nullable: true })
  OR?: AuthorScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [AuthorScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: AuthorScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: IntWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  firstName?: StringWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  lastName?: StringWithAggregatesFilter | undefined;
}
