import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('PostSumAggregate', { isAbstract: true })
export class PostSumAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id!: number | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  authorId!: number | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  votes!: number | null;
}
