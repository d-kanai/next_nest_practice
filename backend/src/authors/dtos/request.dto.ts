import { InputType, Int, Field, ArgsType } from '@nestjs/graphql';
import { IsString, IsInt } from 'class-validator';

@ArgsType()
class PaginationArgs {
  @Field((type) => Int)
  offset: number = 0;

  @Field((type) => Int)
  limit: number = 10;
}

@ArgsType()
export class GetAuthorArgs extends PaginationArgs {
  @IsInt()
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ defaultValue: '' })
  lastName: string;
}

@InputType()
export class UpvotePostInput {
  @IsInt()
  @Field()
  postId: number;
}