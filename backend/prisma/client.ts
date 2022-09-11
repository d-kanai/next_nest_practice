import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const author = await prisma.author.create({
    data: {
      firstName: 'daiki',
      lastName: 'kanai',
    },
  })
  const authors = await prisma.author.findMany()
  console.log(authors)
  console.log(author)
  const author2 = await prisma.author.create({
    data: {
      firstName: 'daiki',
      lastName: 'kanai',
      posts: {
        create: {
          title: 'Hello Prisma',
          published: false,
          votes: 0,
        },
      },
    },
  })
  const authorsWithPosts = await prisma.author.findMany({
    include: {
      posts: true,
    },
  })
  console.dir(authorsWithPosts, { depth: null })
  console.dir(author.firstName)
  console.dir(typeof(author))
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
