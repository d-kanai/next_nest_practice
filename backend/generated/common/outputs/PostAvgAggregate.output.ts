import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('PostAvgAggregate', { isAbstract: true })
export class PostAvgAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Float, { nullable: true })
  id!: number | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Float, { nullable: true })
  authorId!: number | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Float, { nullable: true })
  votes!: number | null;
}
