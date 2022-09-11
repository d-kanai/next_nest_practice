import { MinLength } from 'class-validator';
import { InputType, Int, Field, ArgsType } from '@nestjs/graphql';

@ArgsType()
class PaginationArgs {
  @Field((type) => Int)
  offset: number = 0;

  @Field((type) => Int)
  limit: number = 10;
}

@ArgsType()
export class GetAuthorArgs extends PaginationArgs {
  @Field()
  id: number;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ defaultValue: '' })
  @MinLength(3)
  lastName: string;
}

@InputType()
export class UpvotePostInput {
  @Field()
  postId: number;
}