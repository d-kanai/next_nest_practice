import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Post } from '../../posts/models/post.model';

@ObjectType()
export class Author {

  @Field(type => Int, { description: `Book title`, deprecationReason: 'Not useful in v2 schema' })
  id: number;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

//   @Field(type => [Post], { nullable: 'items' })
  @Field(type => [Post])
  posts?: Post[];
}


@ObjectType()
export class Authors {

  @Field(type => [Author])
  authors: Author[];

}