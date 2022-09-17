import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('PostCountAggregate', { isAbstract: true })
export class PostCountAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  title!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  published!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  authorId!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  votes!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  _all!: number;
}
