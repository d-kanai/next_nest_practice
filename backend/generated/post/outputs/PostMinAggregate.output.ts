import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('PostMinAggregate', { isAbstract: true })
export class PostMinAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id!: number | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  title!: string | null;

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  published!: boolean | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  authorId!: number | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  votes!: number | null;
}
