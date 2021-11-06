import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateUserInput = {
  email: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  password: Scalars['String'];
  role: Scalars['Float'];
};

export type DeleteUserInput = {
  email?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

export type FullUserDto = {
  __typename?: 'FullUserDto';
  createdAt: Scalars['Float'];
  credits: Scalars['Float'];
  email: Scalars['String'];
  id: Scalars['String'];
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
  role: Scalars['Float'];
  tokenVersion: Scalars['Float'];
};

export type GetUserInput = {
  email?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

export type LoginUserInput = {
  email: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};

export type LoginUserOutput = {
  __typename?: 'LoginUserOutput';
  accessToken: Scalars['String'];
  user: UserDto;
};

export type MatchInfo = {
  __typename?: 'MatchInfo';
  team1: Scalars['String'];
  team2: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: UserDto;
  deleteUser: Scalars['Boolean'];
  deleteUserPermanently: Scalars['Boolean'];
  getTipsForDay: Scalars['Boolean'];
  login: LoginUserOutput;
  logout: Scalars['Boolean'];
  refreshToken: RefreshTokenOutput;
  register: Scalars['Boolean'];
  restoreUser: Scalars['Boolean'];
  revokeUserToken: Scalars['Boolean'];
  updateUser: UserDto;
};


export type MutationCreateUserArgs = {
  options: CreateUserInput;
};


export type MutationDeleteUserArgs = {
  options: DeleteUserInput;
};


export type MutationDeleteUserPermanentlyArgs = {
  options: DeleteUserInput;
};


export type MutationLoginArgs = {
  options: LoginUserInput;
};


export type MutationRegisterArgs = {
  options: RegisterUserInput;
};


export type MutationRestoreUserArgs = {
  options: RestoreUserInput;
};


export type MutationRevokeUserTokenArgs = {
  options: RevokeUserTokenInput;
};


export type MutationUpdateUserArgs = {
  options: UpdateUserInput;
};

export type PredictionInfo = {
  __typename?: 'PredictionInfo';
  predictionName: Scalars['String'];
  predictionValue: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  bye: Scalars['String'];
  getAllTips: Array<TipsDto>;
  getAllUsers: Array<FullUserDto>;
  getCurrentUser?: Maybe<FullUserDto>;
  getUser: FullUserDto;
  hello: Scalars['String'];
};


export type QueryGetUserArgs = {
  options: GetUserInput;
};

export type RefreshTokenOutput = {
  __typename?: 'RefreshTokenOutput';
  accessToken: Scalars['String'];
  success: Scalars['Boolean'];
};

export type RegisterUserInput = {
  email: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  password: Scalars['String'];
};

export type RestoreUserInput = {
  email?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

export type RevokeUserTokenInput = {
  email?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

export type TipsDto = {
  __typename?: 'TipsDto';
  id: Scalars['String'];
  isActive: Scalars['Boolean'];
  isDeleted: Scalars['Boolean'];
  matchInfo: MatchInfo;
  matchStart: Scalars['Float'];
  predictionInfo: PredictionInfo;
  sport: Scalars['String'];
};

export type UpdateUserInput = {
  email?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['Float']>;
};

export type UserDto = {
  __typename?: 'UserDto';
  email: Scalars['String'];
  id: Scalars['String'];
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
};

export type LoginMutationVariables = Exact<{
  loginAdminOptions: LoginUserInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginUserOutput', accessToken: string, user: { __typename?: 'UserDto', id: string, email: string, name: string } } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type RefreshAccessTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshAccessTokenMutation = { __typename?: 'Mutation', refreshToken: { __typename?: 'RefreshTokenOutput', accessToken: string } };

export type RegisterMutationVariables = Exact<{
  registerOptions: RegisterUserInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: boolean };

export type RevokeUserTokenMutationVariables = Exact<{
  revokeUserTokenOptions: RevokeUserTokenInput;
}>;


export type RevokeUserTokenMutation = { __typename?: 'Mutation', revokeUserToken: boolean };

export type ByeQueryVariables = Exact<{ [key: string]: never; }>;


export type ByeQuery = { __typename?: 'Query', bye: string };

export type HelloQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloQuery = { __typename?: 'Query', hello: string };

export type GetAllAdminTipsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllAdminTipsQuery = { __typename?: 'Query', getAllTips: Array<{ __typename?: 'TipsDto', id: string, isActive: boolean, sport: string, matchStart: number, matchInfo: { __typename?: 'MatchInfo', team1: string, team2: string }, predictionInfo: { __typename?: 'PredictionInfo', predictionName: string, predictionValue: string } }> };

export type CreateUserMutationVariables = Exact<{
  createUserOptions: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'UserDto', id: string, email: string, name: string } };

export type DeleteUserMutationVariables = Exact<{
  deleteUserOptions: DeleteUserInput;
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: boolean };

export type RestoreUserMutationVariables = Exact<{
  restoreUserOptions: RestoreUserInput;
}>;


export type RestoreUserMutation = { __typename?: 'Mutation', restoreUser: boolean };

export type UpdateUserMutationVariables = Exact<{
  updateUserOptions: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'UserDto', id: string, email: string, name: string } };

export type GetUserQueryVariables = Exact<{
  getUserOptions: GetUserInput;
}>;


export type GetUserQuery = { __typename?: 'Query', getUser: { __typename?: 'FullUserDto', id: string, email: string, name: string, createdAt: number, role: number, tokenVersion: number, credits: number, isDeleted: boolean } };

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = { __typename?: 'Query', getAllUsers: Array<{ __typename?: 'FullUserDto', id: string, email: string, name: string, createdAt: number, role: number, tokenVersion: number, credits: number, isDeleted: boolean }> };


export const LoginDocument = gql`
    mutation Login($loginAdminOptions: LoginUserInput!) {
  login(options: $loginAdminOptions) {
    accessToken
    user {
      id
      email
      name
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      loginAdminOptions: // value for 'loginAdminOptions'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RefreshAccessTokenDocument = gql`
    mutation RefreshAccessToken {
  refreshToken {
    accessToken
  }
}
    `;
export type RefreshAccessTokenMutationFn = Apollo.MutationFunction<RefreshAccessTokenMutation, RefreshAccessTokenMutationVariables>;

/**
 * __useRefreshAccessTokenMutation__
 *
 * To run a mutation, you first call `useRefreshAccessTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshAccessTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshAccessTokenMutation, { data, loading, error }] = useRefreshAccessTokenMutation({
 *   variables: {
 *   },
 * });
 */
export function useRefreshAccessTokenMutation(baseOptions?: Apollo.MutationHookOptions<RefreshAccessTokenMutation, RefreshAccessTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefreshAccessTokenMutation, RefreshAccessTokenMutationVariables>(RefreshAccessTokenDocument, options);
      }
export type RefreshAccessTokenMutationHookResult = ReturnType<typeof useRefreshAccessTokenMutation>;
export type RefreshAccessTokenMutationResult = Apollo.MutationResult<RefreshAccessTokenMutation>;
export type RefreshAccessTokenMutationOptions = Apollo.BaseMutationOptions<RefreshAccessTokenMutation, RefreshAccessTokenMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($registerOptions: RegisterUserInput!) {
  register(options: $registerOptions)
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      registerOptions: // value for 'registerOptions'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const RevokeUserTokenDocument = gql`
    mutation RevokeUserToken($revokeUserTokenOptions: RevokeUserTokenInput!) {
  revokeUserToken(options: $revokeUserTokenOptions)
}
    `;
export type RevokeUserTokenMutationFn = Apollo.MutationFunction<RevokeUserTokenMutation, RevokeUserTokenMutationVariables>;

/**
 * __useRevokeUserTokenMutation__
 *
 * To run a mutation, you first call `useRevokeUserTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRevokeUserTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [revokeUserTokenMutation, { data, loading, error }] = useRevokeUserTokenMutation({
 *   variables: {
 *      revokeUserTokenOptions: // value for 'revokeUserTokenOptions'
 *   },
 * });
 */
export function useRevokeUserTokenMutation(baseOptions?: Apollo.MutationHookOptions<RevokeUserTokenMutation, RevokeUserTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RevokeUserTokenMutation, RevokeUserTokenMutationVariables>(RevokeUserTokenDocument, options);
      }
export type RevokeUserTokenMutationHookResult = ReturnType<typeof useRevokeUserTokenMutation>;
export type RevokeUserTokenMutationResult = Apollo.MutationResult<RevokeUserTokenMutation>;
export type RevokeUserTokenMutationOptions = Apollo.BaseMutationOptions<RevokeUserTokenMutation, RevokeUserTokenMutationVariables>;
export const ByeDocument = gql`
    query Bye {
  bye
}
    `;

/**
 * __useByeQuery__
 *
 * To run a query within a React component, call `useByeQuery` and pass it any options that fit your needs.
 * When your component renders, `useByeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useByeQuery({
 *   variables: {
 *   },
 * });
 */
export function useByeQuery(baseOptions?: Apollo.QueryHookOptions<ByeQuery, ByeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ByeQuery, ByeQueryVariables>(ByeDocument, options);
      }
export function useByeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ByeQuery, ByeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ByeQuery, ByeQueryVariables>(ByeDocument, options);
        }
export type ByeQueryHookResult = ReturnType<typeof useByeQuery>;
export type ByeLazyQueryHookResult = ReturnType<typeof useByeLazyQuery>;
export type ByeQueryResult = Apollo.QueryResult<ByeQuery, ByeQueryVariables>;
export const HelloDocument = gql`
    query Hello {
  hello
}
    `;

/**
 * __useHelloQuery__
 *
 * To run a query within a React component, call `useHelloQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloQuery(baseOptions?: Apollo.QueryHookOptions<HelloQuery, HelloQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HelloQuery, HelloQueryVariables>(HelloDocument, options);
      }
export function useHelloLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HelloQuery, HelloQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HelloQuery, HelloQueryVariables>(HelloDocument, options);
        }
export type HelloQueryHookResult = ReturnType<typeof useHelloQuery>;
export type HelloLazyQueryHookResult = ReturnType<typeof useHelloLazyQuery>;
export type HelloQueryResult = Apollo.QueryResult<HelloQuery, HelloQueryVariables>;
export const GetAllAdminTipsDocument = gql`
    query GetAllAdminTips {
  getAllTips {
    id
    matchInfo {
      team1
      team2
    }
    predictionInfo {
      predictionName
      predictionValue
    }
    isActive
    sport
    matchStart
  }
}
    `;

/**
 * __useGetAllAdminTipsQuery__
 *
 * To run a query within a React component, call `useGetAllAdminTipsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllAdminTipsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllAdminTipsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllAdminTipsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllAdminTipsQuery, GetAllAdminTipsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllAdminTipsQuery, GetAllAdminTipsQueryVariables>(GetAllAdminTipsDocument, options);
      }
export function useGetAllAdminTipsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllAdminTipsQuery, GetAllAdminTipsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllAdminTipsQuery, GetAllAdminTipsQueryVariables>(GetAllAdminTipsDocument, options);
        }
export type GetAllAdminTipsQueryHookResult = ReturnType<typeof useGetAllAdminTipsQuery>;
export type GetAllAdminTipsLazyQueryHookResult = ReturnType<typeof useGetAllAdminTipsLazyQuery>;
export type GetAllAdminTipsQueryResult = Apollo.QueryResult<GetAllAdminTipsQuery, GetAllAdminTipsQueryVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($createUserOptions: CreateUserInput!) {
  createUser(options: $createUserOptions) {
    id
    email
    name
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      createUserOptions: // value for 'createUserOptions'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const DeleteUserDocument = gql`
    mutation DeleteUser($deleteUserOptions: DeleteUserInput!) {
  deleteUser(options: $deleteUserOptions)
}
    `;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      deleteUserOptions: // value for 'deleteUserOptions'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const RestoreUserDocument = gql`
    mutation RestoreUser($restoreUserOptions: RestoreUserInput!) {
  restoreUser(options: $restoreUserOptions)
}
    `;
export type RestoreUserMutationFn = Apollo.MutationFunction<RestoreUserMutation, RestoreUserMutationVariables>;

/**
 * __useRestoreUserMutation__
 *
 * To run a mutation, you first call `useRestoreUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRestoreUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [restoreUserMutation, { data, loading, error }] = useRestoreUserMutation({
 *   variables: {
 *      restoreUserOptions: // value for 'restoreUserOptions'
 *   },
 * });
 */
export function useRestoreUserMutation(baseOptions?: Apollo.MutationHookOptions<RestoreUserMutation, RestoreUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RestoreUserMutation, RestoreUserMutationVariables>(RestoreUserDocument, options);
      }
export type RestoreUserMutationHookResult = ReturnType<typeof useRestoreUserMutation>;
export type RestoreUserMutationResult = Apollo.MutationResult<RestoreUserMutation>;
export type RestoreUserMutationOptions = Apollo.BaseMutationOptions<RestoreUserMutation, RestoreUserMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($updateUserOptions: UpdateUserInput!) {
  updateUser(options: $updateUserOptions) {
    id
    email
    name
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      updateUserOptions: // value for 'updateUserOptions'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const GetUserDocument = gql`
    query GetUser($getUserOptions: GetUserInput!) {
  getUser(options: $getUserOptions) {
    id
    email
    name
    createdAt
    role
    tokenVersion
    credits
    isDeleted
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      getUserOptions: // value for 'getUserOptions'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const GetAllUsersDocument = gql`
    query GetAllUsers {
  getAllUsers {
    id
    email
    name
    createdAt
    role
    tokenVersion
    credits
    isDeleted
  }
}
    `;

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
      }
export function useGetAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
        }
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>;
export type GetAllUsersQueryResult = Apollo.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;