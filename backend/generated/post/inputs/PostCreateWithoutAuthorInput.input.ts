import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('PostCreateWithoutAuthorInput', { isAbstract: true })
export class PostCreateWithoutAuthorInput {
  @NestJsGraphQL.Field(() => String)
  title!: string;

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  published?: boolean | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  votes!: number;
}
