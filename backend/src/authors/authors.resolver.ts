import { Mutation, Resolver, Query, ResolveField, Parent, Args, Int } from "@nestjs/graphql";
import { Author, Authors } from "./models/author.model";
import { UpvotePostInput, GetAuthorArgs } from "./dtos/request.dto";
import { Post } from "../posts/models/post.model";
import { PrismaClient } from '@prisma/client'

@Resolver(() => Author)
export class AuthorsResolver {
  constructor(
    // private authorsService: AuthorsService,
    // private postsService: PostsService,
  ) {}

  // mutation{
  //   upvotePost(upvotePostData:{postId:1}){
  //     id
  //     title
  //   } 
  // }
  @Query(returns => Authors, { name: 'authors' })
  async getAuthors() {
    const prisma = new PrismaClient()
    const authors = await prisma.author.findMany()
    console.dir(authors, {depth: null})
    return {"authors": authors}
  }

  @Query(returns => Author, { name: 'author' })
  async getAuthor(@Args() args: GetAuthorArgs) {
    // return this.authorsService.findOneById(id);
    return []
    console.log(args)
    const author = new Author()
    author.firstName = 'daiki'
    author.lastName = 'kanai'
    console.log(author)
    return author
  }

  @ResolveField('posts', returns => [Post])
  async getPosts(@Parent() author: Author) {
    const prisma = new PrismaClient()
    const posts = await prisma.post.findMany(
      {where: {authorId: author.id}}
    )
    // const post1 = new Post()
    // post1.title = 'poaaaaaaaast1'
    // const post2 =  new Post()
    // post2.title = 'post2'
    // return [post1, post2]
    return posts
    // return this.postsService.findAll({ authorId: id });
  }

  // mutation{
  //   upvotePost(upvotePostData:{postId:1}){
  //     id
  //     title
  //   } 
  // }
  @Mutation(returns => Post)
  async upvotePost(@Args('upvotePostData') upvotePostData: UpvotePostInput) {
    console.log(upvotePostData)
    const post = new Post();
    post.id = 1;
    post.title = 'book'
    return post;
  }
}