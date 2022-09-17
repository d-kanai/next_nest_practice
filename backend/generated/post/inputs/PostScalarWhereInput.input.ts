import * as NestJsGraphQL from "@nestjs/graphql";
import { BoolFilter } from "../../common/inputs/BoolFilter.input";
import { IntFilter } from "../../common/inputs/IntFilter.input";
import { StringFilter } from "../../common/inputs/StringFilter.input";

@NestJsGraphQL.InputType('PostScalarWhereInput', { isAbstract: true })
export class PostScalarWhereInput {
  @NestJsGraphQL.Field(() => [PostScalarWhereInput], { nullable: true })
  AND?: PostScalarWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [PostScalarWhereInput], { nullable: true })
  OR?: PostScalarWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [PostScalarWhereInput], { nullable: true })
  NOT?: PostScalarWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  id?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  title?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => BoolFilter, { nullable: true })
  published?: BoolFilter | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  authorId?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  votes?: IntFilter | undefined;
}
