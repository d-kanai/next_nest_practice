import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('NestedFloatFilter', { isAbstract: true })
export class NestedFloatFilter {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Float, { nullable: true })
  equals?: number | undefined;

  @NestJsGraphQL.Field(() => [NestJsGraphQL.Float], { nullable: true })
  in?: number[] | undefined;

  @NestJsGraphQL.Field(() => [NestJsGraphQL.Float], { nullable: true })
  notIn?: number[] | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Float, { nullable: true })
  lt?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Float, { nullable: true })
  lte?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Float, { nullable: true })
  gt?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Float, { nullable: true })
  gte?: number | undefined;

  @NestJsGraphQL.Field(() => NestedFloatFilter, { nullable: true })
  not?: NestedFloatFilter | undefined;
}
