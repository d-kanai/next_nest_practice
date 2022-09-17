import * as NestJsGraphQL from "@nestjs/graphql";
import { BoolWithAggregatesFilter } from "../../common/inputs/BoolWithAggregatesFilter.input";
import { IntWithAggregatesFilter } from "../../common/inputs/IntWithAggregatesFilter.input";
import { StringWithAggregatesFilter } from "../../common/inputs/StringWithAggregatesFilter.input";

@NestJsGraphQL.InputType('PostScalarWhereWithAggregatesInput', { isAbstract: true })
export class PostScalarWhereWithAggregatesInput {
  @NestJsGraphQL.Field(() => [PostScalarWhereWithAggregatesInput], { nullable: true })
  AND?: PostScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [PostScalarWhereWithAggregatesInput], { nullable: true })
  OR?: PostScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [PostScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: PostScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: IntWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  title?: StringWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => BoolWithAggregatesFilter, { nullable: true })
  published?: BoolWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  authorId?: IntWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  votes?: IntWithAggregatesFilter | undefined;
}
