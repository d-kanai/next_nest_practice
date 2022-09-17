import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregatePost = {
  __typename?: 'AggregatePost';
  _avg?: Maybe<PostAvgAggregate>;
  _count?: Maybe<PostCountAggregate>;
  _max?: Maybe<PostMaxAggregate>;
  _min?: Maybe<PostMinAggregate>;
  _sum?: Maybe<PostSumAggregate>;
};

export type AuthorCreateNestedOneWithoutPostsInput = {
  connect?: InputMaybe<AuthorWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AuthorCreateOrConnectWithoutPostsInput>;
  create?: InputMaybe<AuthorCreateWithoutPostsInput>;
};

export type AuthorCreateOrConnectWithoutPostsInput = {
  create: AuthorCreateWithoutPostsInput;
  where: AuthorWhereUniqueInput;
};

export type AuthorCreateWithoutPostsInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type AuthorOrderByWithRelationInput = {
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  posts?: InputMaybe<PostOrderByRelationAggregateInput>;
};

export type AuthorRelationFilter = {
  is?: InputMaybe<AuthorWhereInput>;
  isNot?: InputMaybe<AuthorWhereInput>;
};

export type AuthorUpdateOneRequiredWithoutPostsNestedInput = {
  connect?: InputMaybe<AuthorWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AuthorCreateOrConnectWithoutPostsInput>;
  create?: InputMaybe<AuthorCreateWithoutPostsInput>;
  update?: InputMaybe<AuthorUpdateWithoutPostsInput>;
  upsert?: InputMaybe<AuthorUpsertWithoutPostsInput>;
};

export type AuthorUpdateWithoutPostsInput = {
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AuthorUpsertWithoutPostsInput = {
  create: AuthorCreateWithoutPostsInput;
  update: AuthorUpdateWithoutPostsInput;
};

export type AuthorWhereInput = {
  AND?: InputMaybe<Array<AuthorWhereInput>>;
  NOT?: InputMaybe<Array<AuthorWhereInput>>;
  OR?: InputMaybe<Array<AuthorWhereInput>>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  lastName?: InputMaybe<StringFilter>;
  posts?: InputMaybe<PostListRelationFilter>;
};

export type AuthorWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost?: Maybe<Post>;
  deleteManyPost?: Maybe<AffectedRowsOutput>;
  deletePost?: Maybe<Post>;
  updateManyPost?: Maybe<AffectedRowsOutput>;
  updatePost?: Maybe<Post>;
  upsertPost?: Maybe<Post>;
};


export type MutationCreatePostArgs = {
  data: PostCreateInput;
};


export type MutationDeleteManyPostArgs = {
  where?: InputMaybe<PostWhereInput>;
};


export type MutationDeletePostArgs = {
  where: PostWhereUniqueInput;
};


export type MutationUpdateManyPostArgs = {
  data: PostUpdateManyMutationInput;
  where?: InputMaybe<PostWhereInput>;
};


export type MutationUpdatePostArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};


export type MutationUpsertPostArgs = {
  create: PostCreateInput;
  update: PostUpdateInput;
  where: PostWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Post = {
  __typename?: 'Post';
  authorId: Scalars['Int'];
  id: Scalars['Int'];
  published: Scalars['Boolean'];
  title: Scalars['String'];
  votes: Scalars['Int'];
};

export type PostAvgAggregate = {
  __typename?: 'PostAvgAggregate';
  authorId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  votes?: Maybe<Scalars['Float']>;
};

export type PostAvgOrderByAggregateInput = {
  authorId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  votes?: InputMaybe<SortOrder>;
};

export type PostCountAggregate = {
  __typename?: 'PostCountAggregate';
  _all: Scalars['Int'];
  authorId: Scalars['Int'];
  id: Scalars['Int'];
  published: Scalars['Int'];
  title: Scalars['Int'];
  votes: Scalars['Int'];
};

export type PostCountOrderByAggregateInput = {
  authorId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  published?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  votes?: InputMaybe<SortOrder>;
};

export type PostCreateInput = {
  author: AuthorCreateNestedOneWithoutPostsInput;
  published?: InputMaybe<Scalars['Boolean']>;
  title: Scalars['String'];
  votes: Scalars['Int'];
};

export type PostGroupBy = {
  __typename?: 'PostGroupBy';
  _avg?: Maybe<PostAvgAggregate>;
  _count?: Maybe<PostCountAggregate>;
  _max?: Maybe<PostMaxAggregate>;
  _min?: Maybe<PostMinAggregate>;
  _sum?: Maybe<PostSumAggregate>;
  authorId: Scalars['Int'];
  id: Scalars['Int'];
  published: Scalars['Boolean'];
  title: Scalars['String'];
  votes: Scalars['Int'];
};

export type PostListRelationFilter = {
  every?: InputMaybe<PostWhereInput>;
  none?: InputMaybe<PostWhereInput>;
  some?: InputMaybe<PostWhereInput>;
};

export type PostMaxAggregate = {
  __typename?: 'PostMaxAggregate';
  authorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  votes?: Maybe<Scalars['Int']>;
};

export type PostMaxOrderByAggregateInput = {
  authorId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  published?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  votes?: InputMaybe<SortOrder>;
};

export type PostMinAggregate = {
  __typename?: 'PostMinAggregate';
  authorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  votes?: Maybe<Scalars['Int']>;
};

export type PostMinOrderByAggregateInput = {
  authorId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  published?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  votes?: InputMaybe<SortOrder>;
};

export type PostOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PostOrderByWithAggregationInput = {
  _avg?: InputMaybe<PostAvgOrderByAggregateInput>;
  _count?: InputMaybe<PostCountOrderByAggregateInput>;
  _max?: InputMaybe<PostMaxOrderByAggregateInput>;
  _min?: InputMaybe<PostMinOrderByAggregateInput>;
  _sum?: InputMaybe<PostSumOrderByAggregateInput>;
  authorId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  published?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  votes?: InputMaybe<SortOrder>;
};

export type PostOrderByWithRelationInput = {
  author?: InputMaybe<AuthorOrderByWithRelationInput>;
  authorId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  published?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  votes?: InputMaybe<SortOrder>;
};

export enum PostScalarFieldEnum {
  AuthorId = 'authorId',
  Id = 'id',
  Published = 'published',
  Title = 'title',
  Votes = 'votes'
}

export type PostScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PostScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PostScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PostScalarWhereWithAggregatesInput>>;
  authorId?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  published?: InputMaybe<BoolWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  votes?: InputMaybe<IntWithAggregatesFilter>;
};

export type PostSumAggregate = {
  __typename?: 'PostSumAggregate';
  authorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  votes?: Maybe<Scalars['Int']>;
};

export type PostSumOrderByAggregateInput = {
  authorId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  votes?: InputMaybe<SortOrder>;
};

export type PostUpdateInput = {
  author?: InputMaybe<AuthorUpdateOneRequiredWithoutPostsNestedInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  votes?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PostUpdateManyMutationInput = {
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  votes?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PostWhereInput = {
  AND?: InputMaybe<Array<PostWhereInput>>;
  NOT?: InputMaybe<Array<PostWhereInput>>;
  OR?: InputMaybe<Array<PostWhereInput>>;
  author?: InputMaybe<AuthorRelationFilter>;
  authorId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  published?: InputMaybe<BoolFilter>;
  title?: InputMaybe<StringFilter>;
  votes?: InputMaybe<IntFilter>;
};

export type PostWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  aggregatePost: AggregatePost;
  findFirstPost: Post;
  findManyPost: Array<Post>;
  findUniquePost: Post;
  groupByPost: Array<PostGroupBy>;
};


export type QueryAggregatePostArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PostOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostWhereInput>;
};


export type QueryFindFirstPostArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  distinct?: InputMaybe<Array<PostScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PostOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostWhereInput>;
};


export type QueryFindManyPostArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  distinct?: InputMaybe<Array<PostScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PostOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostWhereInput>;
};


export type QueryFindUniquePostArgs = {
  where: PostWhereUniqueInput;
};


export type QueryGroupByPostArgs = {
  by: Array<PostScalarFieldEnum>;
  having?: InputMaybe<PostScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PostOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostWhereInput>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type FindManyPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindManyPostsQuery = { __typename?: 'Query', findManyPost: Array<{ __typename?: 'Post', id: number, authorId: number, published: boolean, title: string, votes: number }> };

export type CreatePostMutationVariables = Exact<{ [key: string]: never; }>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost?: { __typename?: 'Post', id: number, authorId: number, title: string, votes: number } | null };


export const FindManyPostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindManyPosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findManyPost"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"authorId"}},{"kind":"Field","name":{"kind":"Name","value":"published"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"votes"}}]}}]}}]} as unknown as DocumentNode<FindManyPostsQuery, FindManyPostsQueryVariables>;
export const CreatePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePost"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"StringValue","value":"new post","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"votes"},"value":{"kind":"IntValue","value":"1"}},{"kind":"ObjectField","name":{"kind":"Name","value":"author"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"connect"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"IntValue","value":"1"}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"authorId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"votes"}}]}}]}}]} as unknown as DocumentNode<CreatePostMutation, CreatePostMutationVariables>;