import * as NestJsGraphQL from "@nestjs/graphql";
import { StringFieldUpdateOperationsInput } from "../../common/inputs/StringFieldUpdateOperationsInput.input";
import { PostUpdateManyWithoutAuthorNestedInput } from "../../post/inputs/PostUpdateManyWithoutAuthorNestedInput.input";

@NestJsGraphQL.InputType('AuthorUpdateInput', { isAbstract: true })
export class AuthorUpdateInput {
  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  firstName?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  lastName?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => PostUpdateManyWithoutAuthorNestedInput, { nullable: true })
  posts?: PostUpdateManyWithoutAuthorNestedInput | undefined;
}
