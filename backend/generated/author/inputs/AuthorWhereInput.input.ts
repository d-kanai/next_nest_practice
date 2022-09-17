import * as NestJsGraphQL from "@nestjs/graphql";
import { IntFilter } from "../../common/inputs/IntFilter.input";
import { StringFilter } from "../../common/inputs/StringFilter.input";
import { PostListRelationFilter } from "../../post/inputs/PostListRelationFilter.input";

@NestJsGraphQL.InputType('AuthorWhereInput', { isAbstract: true })
export class AuthorWhereInput {
  @NestJsGraphQL.Field(() => [AuthorWhereInput], { nullable: true })
  AND?: AuthorWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [AuthorWhereInput], { nullable: true })
  OR?: AuthorWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [AuthorWhereInput], { nullable: true })
  NOT?: AuthorWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  id?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  firstName?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  lastName?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => PostListRelationFilter, { nullable: true })
  posts?: PostListRelationFilter | undefined;
}
