import * as NestJsGraphQL from "@nestjs/graphql";
import { BoolFieldUpdateOperationsInput } from "../../common/inputs/BoolFieldUpdateOperationsInput.input";
import { IntFieldUpdateOperationsInput } from "../../common/inputs/IntFieldUpdateOperationsInput.input";
import { StringFieldUpdateOperationsInput } from "../../common/inputs/StringFieldUpdateOperationsInput.input";

@NestJsGraphQL.InputType('PostUpdateManyMutationInput', { isAbstract: true })
export class PostUpdateManyMutationInput {
  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  title?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  published?: BoolFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  votes?: IntFieldUpdateOperationsInput | undefined;
}
