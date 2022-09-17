import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('IntFieldUpdateOperationsInput', { isAbstract: true })
export class IntFieldUpdateOperationsInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  set?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  increment?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  decrement?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  multiply?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  divide?: number | undefined;
}
