import * as NestJsGraphQL from "@nestjs/graphql";
import { Author } from "../models/author.model";

@NestJsGraphQL.ObjectType('Post', { isAbstract: true })
export class Post {

  constructor(id:number, title:string, published:boolean, author: Author, votes: number) {
    this.id = id;
    this.title = title;
    this.published = published;
    this.authorId = author.id;
    this.author = author
    this.votes= votes;
  }

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => String)
  title!: string;

  @NestJsGraphQL.Field(() => String)
  get computedTitle(): string {
    return 'computed ' + this.title;
  }

  @NestJsGraphQL.Field(() => Boolean)
  published!: boolean;

  @NestJsGraphQL.Field(() => Author)
  author?: Author;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  authorId!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  votes!: number;
}
