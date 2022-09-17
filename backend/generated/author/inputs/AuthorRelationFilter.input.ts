import * as NestJsGraphQL from "@nestjs/graphql";
import { AuthorWhereInput } from "../../author/inputs/AuthorWhereInput.input";

@NestJsGraphQL.InputType('AuthorRelationFilter', { isAbstract: true })
export class AuthorRelationFilter {
  @NestJsGraphQL.Field(() => AuthorWhereInput, { nullable: true })
  is?: AuthorWhereInput | undefined;

  @NestJsGraphQL.Field(() => AuthorWhereInput, { nullable: true })
  isNot?: AuthorWhereInput | undefined;
}
