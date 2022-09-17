import * as NestJsGraphQL from "@nestjs/graphql";
import { AuthorUpdateOneRequiredWithoutPostsNestedInput } from "../../author/inputs/AuthorUpdateOneRequiredWithoutPostsNestedInput.input";
import { BoolFieldUpdateOperationsInput } from "../../common/inputs/BoolFieldUpdateOperationsInput.input";
import { IntFieldUpdateOperationsInput } from "../../common/inputs/IntFieldUpdateOperationsInput.input";
import { StringFieldUpdateOperationsInput } from "../../common/inputs/StringFieldUpdateOperationsInput.input";

@NestJsGraphQL.InputType('PostUpdateInput', { isAbstract: true })
export class PostUpdateInput {
  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  title?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  published?: BoolFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => AuthorUpdateOneRequiredWithoutPostsNestedInput, { nullable: true })
  author?: AuthorUpdateOneRequiredWithoutPostsNestedInput | undefined;

  @NestJsGraphQL.Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  votes?: IntFieldUpdateOperationsInput | undefined;
}
