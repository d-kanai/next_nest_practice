import * as NestJsGraphQL from "@nestjs/graphql";
import { AuthorAvgAggregate } from "../../common/outputs/AuthorAvgAggregate.output";
import { AuthorSumAggregate } from "../../common/outputs/AuthorSumAggregate.output";
import { AuthorCountAggregate } from "./AuthorCountAggregate.output";
import { AuthorMaxAggregate } from "./AuthorMaxAggregate.output";
import { AuthorMinAggregate } from "./AuthorMinAggregate.output";

@NestJsGraphQL.ObjectType('AggregateAuthor', { isAbstract: true })
export class AggregateAuthor {
  @NestJsGraphQL.Field(() => AuthorCountAggregate, { nullable: true })
  _count!: AuthorCountAggregate | null;

  @NestJsGraphQL.Field(() => AuthorAvgAggregate, { nullable: true })
  _avg!: AuthorAvgAggregate | null;

  @NestJsGraphQL.Field(() => AuthorSumAggregate, { nullable: true })
  _sum!: AuthorSumAggregate | null;

  @NestJsGraphQL.Field(() => AuthorMinAggregate, { nullable: true })
  _min!: AuthorMinAggregate | null;

  @NestJsGraphQL.Field(() => AuthorMaxAggregate, { nullable: true })
  _max!: AuthorMaxAggregate | null;
}
