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

  @Query(returns => Authors, { name: 'authors' })
  async getAuthors() {
    const prisma = new PrismaClient()
    const authors = await prisma.author.findMany({include: {posts: true}})
    console.dir(authors, {depth: null})
    return {"authors": authors}
  }

  @Query(returns => Author, { name: 'author' })
  async getAuthor(@Args() args: GetAuthorArgs) {
    console.log(args)
    const prisma = new PrismaClient()
    const author = await prisma.author.findUnique({where: {id: args.id}})
    console.log(author)
    return author
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
    const prisma = new PrismaClient()
    const post = await prisma.post.update({
      where: { id: upvotePostData.postId, },
      data: { votes: { increment: 1 }, },
    })
    return post;
  }
}