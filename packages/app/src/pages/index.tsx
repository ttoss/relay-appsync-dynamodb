/* eslint-disable camelcase */
import { graphql, useLazyLoadQuery } from 'react-relay/hooks';

import { pagesIndexGetDataQuery } from '../__generated__/pagesIndexGetDataQuery.graphql';

const UserPosts = () => {
  return <span>User Posts</span>;
};

const Index = () => {
  const { user } = useLazyLoadQuery<pagesIndexGetDataQuery>(
    graphql`
      query pagesIndexGetDataQuery($userId: ID!) {
        user(id: $userId) {
          id
          name
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
      <UserPosts />
    </div>
  );
};

export default Index;
