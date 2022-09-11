import { Resolver, Query, ResolveField, Parent, Args, Int } from "@nestjs/graphql";
import { Author } from "./models/author.model";
import { GetAuthorArgs } from "./dtos/get-author.dto";
import { Post } from "../posts/models/post.model";

@Resolver(() => Author)
export class AuthorsResolver {
  constructor(
    // private authorsService: AuthorsService,
    // private postsService: PostsService,
  ) {}

  @Query(returns => Author, { name: 'author' })
  async getAuthor(@Args() args: GetAuthorArgs) {
    // return this.authorsService.findOneById(id);
    console.log(args)
    const author = new Author()
    author.firstName = 'daiki'
    author.lastName = 'kanai'
    console.log(author)
    return author
  }

  @ResolveField('posts', returns => [Post])
  async getPosts(@Parent() author: Author) {
    const { id } = author;
    const post1 = new Post()
    post1.title = 'post1'
    const post2 =  new Post()
    post2.title = 'post2'
    return [post1, post2]
    // return this.postsService.findAll({ authorId: id });
  }
}