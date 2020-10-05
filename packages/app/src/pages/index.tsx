/* eslint-disable camelcase */
import {
  graphql,
  useLazyLoadQuery,
  usePaginationFragment,
} from 'react-relay/hooks';

import { pagesIndexGetDataQuery } from '../__generated__/pagesIndexGetDataQuery.graphql';
import { PostsPaginationQuery } from '../__generated__/PostsPaginationQuery.graphql';
import { pagesPosts_user$key } from '../__generated__/pagesPosts_user.graphql';

const UserPosts = ({ user }: { user: pagesPosts_user$key }) => {
  const { data, hasNext, loadNext, isLoadingNext } = usePaginationFragment<
    PostsPaginationQuery,
    pagesPosts_user$key
  >(
    graphql`
      fragment pagesPosts_user on User
      @argumentDefinitions(
        first: { type: "Int", defaultValue: 2 }
        after: { type: "String" }
      )
      @refetchable(queryName: "PostsPaginationQuery") {
        posts(first: $first, after: $after)
          @connection(key: "pagesPosts_user_posts") {
          edges {
            node {
              id
              title
              description
            }
          }
          ctx
        }
      }
    `,
    user,
  );

  const newData = {
    ...data,
    posts: { ...data.posts, ctx: JSON.parse(data.posts?.ctx || '') },
  };

  return (
    <>
      {hasNext ? (
        <button
          type="button"
          disabled={isLoadingNext}
          onClick={() => loadNext(2)}
        >
          {isLoadingNext ? 'Loading...' : 'Load more'}
        </button>
      ) : null}
      <pre>{JSON.stringify(newData, null, 2)}</pre>
    </>
  );
};

const Index = () => {
  const { user } = useLazyLoadQuery<pagesIndexGetDataQuery>(
    graphql`
      query pagesIndexGetDataQuery($userId: ID!) {
        user(id: $userId) {
          id
          name
          ...pagesPosts_user @arguments(first: 2)
        }
      }
    `,
    { userId: '1' },
  );

  if (!user) {
    return null;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <h2>Posts</h2>
      <UserPosts user={user} />
    </div>
  );
};

export default Index;
