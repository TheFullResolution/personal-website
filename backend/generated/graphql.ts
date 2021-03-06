import { Context } from '../models/context'
import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql'
export type Maybe<T> = T | null
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: any
}

export type AggregateBlogPost = {
  __typename?: 'AggregateBlogPost'
  count: Scalars['Int']
}

export type BlogPost = {
  __typename?: 'BlogPost'
  id: Scalars['ID']
  title: Scalars['String']
  body: Scalars['String']
  updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  user: User
}

export type BlogPostConnectionFiltered = {
  __typename?: 'BlogPostConnectionFiltered'
  pageInfo: PageInfo
  aggregate: AggregateBlogPost
}

export type BlogPostOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'title_ASC'
  | 'title_DESC'
  | 'body_ASC'
  | 'body_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'

export type BlogPostWhereInput = {
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_lt?: Maybe<Scalars['ID']>
  id_lte?: Maybe<Scalars['ID']>
  id_gt?: Maybe<Scalars['ID']>
  id_gte?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
  title?: Maybe<Scalars['String']>
  title_not?: Maybe<Scalars['String']>
  title_in?: Maybe<Array<Scalars['String']>>
  title_not_in?: Maybe<Array<Scalars['String']>>
  title_lt?: Maybe<Scalars['String']>
  title_lte?: Maybe<Scalars['String']>
  title_gt?: Maybe<Scalars['String']>
  title_gte?: Maybe<Scalars['String']>
  title_contains?: Maybe<Scalars['String']>
  title_not_contains?: Maybe<Scalars['String']>
  title_starts_with?: Maybe<Scalars['String']>
  title_not_starts_with?: Maybe<Scalars['String']>
  title_ends_with?: Maybe<Scalars['String']>
  title_not_ends_with?: Maybe<Scalars['String']>
  body?: Maybe<Scalars['String']>
  body_not?: Maybe<Scalars['String']>
  body_in?: Maybe<Array<Scalars['String']>>
  body_not_in?: Maybe<Array<Scalars['String']>>
  body_lt?: Maybe<Scalars['String']>
  body_lte?: Maybe<Scalars['String']>
  body_gt?: Maybe<Scalars['String']>
  body_gte?: Maybe<Scalars['String']>
  body_contains?: Maybe<Scalars['String']>
  body_not_contains?: Maybe<Scalars['String']>
  body_starts_with?: Maybe<Scalars['String']>
  body_not_starts_with?: Maybe<Scalars['String']>
  body_ends_with?: Maybe<Scalars['String']>
  body_not_ends_with?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedAt_not?: Maybe<Scalars['DateTime']>
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  createdAt?: Maybe<Scalars['DateTime']>
  createdAt_not?: Maybe<Scalars['DateTime']>
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  user?: Maybe<UserWhereInput>
  AND?: Maybe<Array<BlogPostWhereInput>>
  OR?: Maybe<Array<BlogPostWhereInput>>
  NOT?: Maybe<Array<BlogPostWhereInput>>
}

export type BlogPostWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
}

export type Like = {
  __typename?: 'Like'
  id: Scalars['ID']
  user: User
  blogPost: BlogPost
}

export type LikeOrderByInput = 'id_ASC' | 'id_DESC'

export type LikeWhereInput = {
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_lt?: Maybe<Scalars['ID']>
  id_lte?: Maybe<Scalars['ID']>
  id_gt?: Maybe<Scalars['ID']>
  id_gte?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
  user?: Maybe<UserWhereInput>
  blogPost?: Maybe<BlogPostWhereInput>
  AND?: Maybe<Array<LikeWhereInput>>
  OR?: Maybe<Array<LikeWhereInput>>
  NOT?: Maybe<Array<LikeWhereInput>>
}

export type LikeWithIdOnly = {
  __typename?: 'LikeWithIdOnly'
  id: Scalars['ID']
}

export type Mutation = {
  __typename?: 'Mutation'
  createBlogPost: BlogPost
  createLike: LikeWithIdOnly
  updateBlogPost: BlogPost
  deleteLike?: Maybe<LikeWithIdOnly>
  deleteBlogPost?: Maybe<BlogPost>
  login: User
  logout?: Maybe<SuccessMessage>
  signup: User
}

export type MutationCreateBlogPostArgs = {
  title: Scalars['String']
  body: Scalars['String']
}

export type MutationCreateLikeArgs = {
  blogPost: Scalars['ID']
}

export type MutationUpdateBlogPostArgs = {
  id: Scalars['ID']
  title: Scalars['String']
  body: Scalars['String']
}

export type MutationDeleteLikeArgs = {
  id: Scalars['ID']
}

export type MutationDeleteBlogPostArgs = {
  id: Scalars['ID']
}

export type MutationLoginArgs = {
  email: Scalars['String']
  password: Scalars['String']
}

export type MutationSignupArgs = {
  email: Scalars['String']
  password: Scalars['String']
  name: Scalars['String']
}

export type PageInfo = {
  __typename?: 'PageInfo'
  hasNextPage: Scalars['Boolean']
  hasPreviousPage: Scalars['Boolean']
  startCursor?: Maybe<Scalars['String']>
  endCursor?: Maybe<Scalars['String']>
}

export type Permission =
  | 'ADMIN'
  | 'USER'
  | 'ITEMCREATE'
  | 'ITEMUPDATE'
  | 'ITEMDELETE'
  | 'PERMISSIONUPDATE'

export type Query = {
  __typename?: 'Query'
  blogPosts: Array<Maybe<BlogPost>>
  blogPostsConnection: BlogPostConnectionFiltered
  likes: Array<Maybe<Like>>
  me?: Maybe<User>
  blogPost?: Maybe<BlogPost>
}

export type QueryBlogPostsArgs = {
  where?: Maybe<BlogPostWhereInput>
  orderBy?: Maybe<BlogPostOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QueryBlogPostsConnectionArgs = {
  where?: Maybe<BlogPostWhereInput>
}

export type QueryLikesArgs = {
  where?: Maybe<LikeWhereInput>
  orderBy?: Maybe<LikeOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QueryBlogPostArgs = {
  where: BlogPostWhereUniqueInput
}

export type SuccessMessage = {
  __typename?: 'SuccessMessage'
  message?: Maybe<Scalars['String']>
}

export type User = {
  __typename?: 'User'
  id: Scalars['ID']
  name: Scalars['String']
  email: Scalars['String']
  password: Scalars['String']
  resetToken?: Maybe<Scalars['String']>
  resetTokenExpiry?: Maybe<Scalars['Float']>
  permissions: Array<Permission>
}

export type UserWhereInput = {
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_lt?: Maybe<Scalars['ID']>
  id_lte?: Maybe<Scalars['ID']>
  id_gt?: Maybe<Scalars['ID']>
  id_gte?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  name_not?: Maybe<Scalars['String']>
  name_in?: Maybe<Array<Scalars['String']>>
  name_not_in?: Maybe<Array<Scalars['String']>>
  name_lt?: Maybe<Scalars['String']>
  name_lte?: Maybe<Scalars['String']>
  name_gt?: Maybe<Scalars['String']>
  name_gte?: Maybe<Scalars['String']>
  name_contains?: Maybe<Scalars['String']>
  name_not_contains?: Maybe<Scalars['String']>
  name_starts_with?: Maybe<Scalars['String']>
  name_not_starts_with?: Maybe<Scalars['String']>
  name_ends_with?: Maybe<Scalars['String']>
  name_not_ends_with?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  email_not?: Maybe<Scalars['String']>
  email_in?: Maybe<Array<Scalars['String']>>
  email_not_in?: Maybe<Array<Scalars['String']>>
  email_lt?: Maybe<Scalars['String']>
  email_lte?: Maybe<Scalars['String']>
  email_gt?: Maybe<Scalars['String']>
  email_gte?: Maybe<Scalars['String']>
  email_contains?: Maybe<Scalars['String']>
  email_not_contains?: Maybe<Scalars['String']>
  email_starts_with?: Maybe<Scalars['String']>
  email_not_starts_with?: Maybe<Scalars['String']>
  email_ends_with?: Maybe<Scalars['String']>
  email_not_ends_with?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
  password_not?: Maybe<Scalars['String']>
  password_in?: Maybe<Array<Scalars['String']>>
  password_not_in?: Maybe<Array<Scalars['String']>>
  password_lt?: Maybe<Scalars['String']>
  password_lte?: Maybe<Scalars['String']>
  password_gt?: Maybe<Scalars['String']>
  password_gte?: Maybe<Scalars['String']>
  password_contains?: Maybe<Scalars['String']>
  password_not_contains?: Maybe<Scalars['String']>
  password_starts_with?: Maybe<Scalars['String']>
  password_not_starts_with?: Maybe<Scalars['String']>
  password_ends_with?: Maybe<Scalars['String']>
  password_not_ends_with?: Maybe<Scalars['String']>
  resetToken?: Maybe<Scalars['String']>
  resetToken_not?: Maybe<Scalars['String']>
  resetToken_in?: Maybe<Array<Scalars['String']>>
  resetToken_not_in?: Maybe<Array<Scalars['String']>>
  resetToken_lt?: Maybe<Scalars['String']>
  resetToken_lte?: Maybe<Scalars['String']>
  resetToken_gt?: Maybe<Scalars['String']>
  resetToken_gte?: Maybe<Scalars['String']>
  resetToken_contains?: Maybe<Scalars['String']>
  resetToken_not_contains?: Maybe<Scalars['String']>
  resetToken_starts_with?: Maybe<Scalars['String']>
  resetToken_not_starts_with?: Maybe<Scalars['String']>
  resetToken_ends_with?: Maybe<Scalars['String']>
  resetToken_not_ends_with?: Maybe<Scalars['String']>
  resetTokenExpiry?: Maybe<Scalars['Float']>
  resetTokenExpiry_not?: Maybe<Scalars['Float']>
  resetTokenExpiry_in?: Maybe<Array<Scalars['Float']>>
  resetTokenExpiry_not_in?: Maybe<Array<Scalars['Float']>>
  resetTokenExpiry_lt?: Maybe<Scalars['Float']>
  resetTokenExpiry_lte?: Maybe<Scalars['Float']>
  resetTokenExpiry_gt?: Maybe<Scalars['Float']>
  resetTokenExpiry_gte?: Maybe<Scalars['Float']>
  AND?: Maybe<Array<UserWhereInput>>
  OR?: Maybe<Array<UserWhereInput>>
  NOT?: Maybe<Array<UserWhereInput>>
}
export type WithIndex<TObject> = TObject & Record<string, any>
export type ResolversObject<TObject> = WithIndex<TObject>

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult

export type Resolver<
  TResult,
  TParent = {},
  TContext = {},
  TArgs = {}
> = ResolverFn<TResult, TParent, TContext, TArgs>

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>
}

export type SubscriptionResolver<
  TResult,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>
  BlogPostWhereInput: BlogPostWhereInput
  ID: ResolverTypeWrapper<Scalars['ID']>
  String: ResolverTypeWrapper<Scalars['String']>
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>
  UserWhereInput: UserWhereInput
  Float: ResolverTypeWrapper<Scalars['Float']>
  BlogPostOrderByInput: BlogPostOrderByInput
  Int: ResolverTypeWrapper<Scalars['Int']>
  BlogPost: ResolverTypeWrapper<BlogPost>
  User: ResolverTypeWrapper<User>
  Permission: Permission
  BlogPostConnectionFiltered: ResolverTypeWrapper<BlogPostConnectionFiltered>
  PageInfo: ResolverTypeWrapper<PageInfo>
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>
  AggregateBlogPost: ResolverTypeWrapper<AggregateBlogPost>
  LikeWhereInput: LikeWhereInput
  LikeOrderByInput: LikeOrderByInput
  Like: ResolverTypeWrapper<Like>
  BlogPostWhereUniqueInput: BlogPostWhereUniqueInput
  Mutation: ResolverTypeWrapper<{}>
  LikeWithIdOnly: ResolverTypeWrapper<LikeWithIdOnly>
  SuccessMessage: ResolverTypeWrapper<SuccessMessage>
}>

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {}
  BlogPostWhereInput: BlogPostWhereInput
  ID: Scalars['ID']
  String: Scalars['String']
  DateTime: Scalars['DateTime']
  UserWhereInput: UserWhereInput
  Float: Scalars['Float']
  BlogPostOrderByInput: BlogPostOrderByInput
  Int: Scalars['Int']
  BlogPost: BlogPost
  User: User
  Permission: Permission
  BlogPostConnectionFiltered: BlogPostConnectionFiltered
  PageInfo: PageInfo
  Boolean: Scalars['Boolean']
  AggregateBlogPost: AggregateBlogPost
  LikeWhereInput: LikeWhereInput
  LikeOrderByInput: LikeOrderByInput
  Like: Like
  BlogPostWhereUniqueInput: BlogPostWhereUniqueInput
  Mutation: {}
  LikeWithIdOnly: LikeWithIdOnly
  SuccessMessage: SuccessMessage
}>

export type AggregateBlogPostResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['AggregateBlogPost']
> = ResolversObject<{
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
}>

export type BlogPostResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['BlogPost']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>
}>

export type BlogPostConnectionFilteredResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['BlogPostConnectionFiltered']
> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>
  aggregate?: Resolver<
    ResolversTypes['AggregateBlogPost'],
    ParentType,
    ContextType
  >
}>

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime'
}

export type LikeResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['Like']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>
  blogPost?: Resolver<ResolversTypes['BlogPost'], ParentType, ContextType>
}>

export type LikeWithIdOnlyResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['LikeWithIdOnly']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
}>

export type MutationResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['Mutation']
> = ResolversObject<{
  createBlogPost?: Resolver<
    ResolversTypes['BlogPost'],
    ParentType,
    ContextType,
    MutationCreateBlogPostArgs
  >
  createLike?: Resolver<
    ResolversTypes['LikeWithIdOnly'],
    ParentType,
    ContextType,
    MutationCreateLikeArgs
  >
  updateBlogPost?: Resolver<
    ResolversTypes['BlogPost'],
    ParentType,
    ContextType,
    MutationUpdateBlogPostArgs
  >
  deleteLike?: Resolver<
    Maybe<ResolversTypes['LikeWithIdOnly']>,
    ParentType,
    ContextType,
    MutationDeleteLikeArgs
  >
  deleteBlogPost?: Resolver<
    Maybe<ResolversTypes['BlogPost']>,
    ParentType,
    ContextType,
    MutationDeleteBlogPostArgs
  >
  login?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    MutationLoginArgs
  >
  logout?: Resolver<
    Maybe<ResolversTypes['SuccessMessage']>,
    ParentType,
    ContextType
  >
  signup?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    MutationSignupArgs
  >
}>

export type PageInfoResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['PageInfo']
> = ResolversObject<{
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  startCursor?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
}>

export type QueryResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['Query']
> = ResolversObject<{
  blogPosts?: Resolver<
    Array<Maybe<ResolversTypes['BlogPost']>>,
    ParentType,
    ContextType,
    QueryBlogPostsArgs
  >
  blogPostsConnection?: Resolver<
    ResolversTypes['BlogPostConnectionFiltered'],
    ParentType,
    ContextType,
    QueryBlogPostsConnectionArgs
  >
  likes?: Resolver<
    Array<Maybe<ResolversTypes['Like']>>,
    ParentType,
    ContextType,
    QueryLikesArgs
  >
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  blogPost?: Resolver<
    Maybe<ResolversTypes['BlogPost']>,
    ParentType,
    ContextType,
    QueryBlogPostArgs
  >
}>

export type SuccessMessageResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['SuccessMessage']
> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
}>

export type UserResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['User']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  resetToken?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  resetTokenExpiry?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >
  permissions?: Resolver<
    Array<ResolversTypes['Permission']>,
    ParentType,
    ContextType
  >
}>

export type Resolvers<ContextType = Context> = ResolversObject<{
  AggregateBlogPost?: AggregateBlogPostResolvers<ContextType>
  BlogPost?: BlogPostResolvers<ContextType>
  BlogPostConnectionFiltered?: BlogPostConnectionFilteredResolvers<ContextType>
  DateTime?: GraphQLScalarType
  Like?: LikeResolvers<ContextType>
  LikeWithIdOnly?: LikeWithIdOnlyResolvers<ContextType>
  Mutation?: MutationResolvers<ContextType>
  PageInfo?: PageInfoResolvers<ContextType>
  Query?: QueryResolvers<ContextType>
  SuccessMessage?: SuccessMessageResolvers<ContextType>
  User?: UserResolvers<ContextType>
}>

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = Context> = Resolvers<ContextType>
