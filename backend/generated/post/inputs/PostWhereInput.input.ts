import * as NestJsGraphQL from "@nestjs/graphql";
import { AuthorRelationFilter } from "../../author/inputs/AuthorRelationFilter.input";
import { BoolFilter } from "../../common/inputs/BoolFilter.input";
import { IntFilter } from "../../common/inputs/IntFilter.input";
import { StringFilter } from "../../common/inputs/StringFilter.input";

@NestJsGraphQL.InputType('PostWhereInput', { isAbstract: true })
export class PostWhereInput {
  @NestJsGraphQL.Field(() => [PostWhereInput], { nullable: true })
  AND?: PostWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [PostWhereInput], { nullable: true })
  OR?: PostWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [PostWhereInput], { nullable: true })
  NOT?: PostWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  id?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  title?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => BoolFilter, { nullable: true })
  published?: BoolFilter | undefined;

  @NestJsGraphQL.Field(() => AuthorRelationFilter, { nullable: true })
  author?: AuthorRelationFilter | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  authorId?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  votes?: IntFilter | undefined;
}
