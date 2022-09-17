import * as NestJsGraphQL from "@nestjs/graphql";
import { AuthorCreateInput } from "../author/inputs/AuthorCreateInput.input";
import { AuthorOrderByWithAggregationInput } from "../author/inputs/AuthorOrderByWithAggregationInput.input";
import { AuthorOrderByWithRelationInput } from "../author/inputs/AuthorOrderByWithRelationInput.input";
import { AuthorScalarWhereWithAggregatesInput } from "../author/inputs/AuthorScalarWhereWithAggregatesInput.input";
import { AuthorUpdateInput } from "../author/inputs/AuthorUpdateInput.input";
import { AuthorUpdateManyMutationInput } from "../author/inputs/AuthorUpdateManyMutationInput.input";
import { AuthorWhereInput } from "../author/inputs/AuthorWhereInput.input";
import { AuthorWhereUniqueInput } from "../author/inputs/AuthorWhereUniqueInput.input";
import { AuthorScalarFieldEnum } from "../common/enums";

@NestJsGraphQL.ArgsType()
export class AggregateAuthorArgs {
  @NestJsGraphQL.Field(() => AuthorWhereInput, { nullable: true })
  where?: AuthorWhereInput | undefined;

  @NestJsGraphQL.Field(() => [AuthorOrderByWithRelationInput], { nullable: true })
  orderBy?: AuthorOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => AuthorWhereUniqueInput, { nullable: true })
  cursor?: AuthorWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class CreateOneAuthorArgs {
  @NestJsGraphQL.Field(() => AuthorCreateInput)
  data!: AuthorCreateInput;
}

@NestJsGraphQL.ArgsType()
export class DeleteManyAuthorArgs {
  @NestJsGraphQL.Field(() => AuthorWhereInput, { nullable: true })
  where?: AuthorWhereInput | undefined;
}

@NestJsGraphQL.ArgsType()
export class DeleteOneAuthorArgs {
  @NestJsGraphQL.Field(() => AuthorWhereUniqueInput)
  where!: AuthorWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class FindFirstAuthorArgs {
  @NestJsGraphQL.Field(() => AuthorWhereInput, { nullable: true })
  where?: AuthorWhereInput | undefined;

  @NestJsGraphQL.Field(() => [AuthorOrderByWithRelationInput], { nullable: true })
  orderBy?: AuthorOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => AuthorWhereUniqueInput, { nullable: true })
  cursor?: AuthorWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [AuthorScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "firstName" | "lastName"> | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindManyAuthorArgs {
  @NestJsGraphQL.Field(() => AuthorWhereInput, { nullable: true })
  where?: AuthorWhereInput | undefined;

  @NestJsGraphQL.Field(() => [AuthorOrderByWithRelationInput], { nullable: true })
  orderBy?: AuthorOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => AuthorWhereUniqueInput, { nullable: true })
  cursor?: AuthorWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [AuthorScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "firstName" | "lastName"> | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindUniqueAuthorArgs {
  @NestJsGraphQL.Field(() => AuthorWhereUniqueInput)
  where!: AuthorWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class GroupByAuthorArgs {
  @NestJsGraphQL.Field(() => AuthorWhereInput, { nullable: true })
  where?: AuthorWhereInput | undefined;

  @NestJsGraphQL.Field(() => [AuthorOrderByWithAggregationInput], { nullable: true })
  orderBy?: AuthorOrderByWithAggregationInput[] | undefined;

  @NestJsGraphQL.Field(() => [AuthorScalarFieldEnum])
  by!: Array<"id" | "firstName" | "lastName">;

  @NestJsGraphQL.Field(() => AuthorScalarWhereWithAggregatesInput, { nullable: true })
  having?: AuthorScalarWhereWithAggregatesInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateManyAuthorArgs {
  @NestJsGraphQL.Field(() => AuthorUpdateManyMutationInput)
  data!: AuthorUpdateManyMutationInput;

  @NestJsGraphQL.Field(() => AuthorWhereInput, { nullable: true })
  where?: AuthorWhereInput | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateOneAuthorArgs {
  @NestJsGraphQL.Field(() => AuthorUpdateInput)
  data!: AuthorUpdateInput;

  @NestJsGraphQL.Field(() => AuthorWhereUniqueInput)
  where!: AuthorWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class UpsertOneAuthorArgs {
  @NestJsGraphQL.Field(() => AuthorWhereUniqueInput)
  where!: AuthorWhereUniqueInput;

  @NestJsGraphQL.Field(() => AuthorCreateInput)
  create!: AuthorCreateInput;

  @NestJsGraphQL.Field(() => AuthorUpdateInput)
  update!: AuthorUpdateInput;
}
