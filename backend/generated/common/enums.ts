import * as NestJsGraphQL from "@nestjs/graphql";

export enum AuthorScalarFieldEnum {
  id = "id",
  firstName = "firstName",
  lastName = "lastName"
}
NestJsGraphQL.registerEnumType(AuthorScalarFieldEnum, {
  name: "AuthorScalarFieldEnum",
  description: undefined,
});

export enum PostScalarFieldEnum {
  id = "id",
  title = "title",
  published = "published",
  authorId = "authorId",
  votes = "votes"
}
NestJsGraphQL.registerEnumType(PostScalarFieldEnum, {
  name: "PostScalarFieldEnum",
  description: undefined,
});

export enum SortOrder {
  asc = "asc",
  desc = "desc"
}
NestJsGraphQL.registerEnumType(SortOrder, {
  name: "SortOrder",
  description: undefined,
});
