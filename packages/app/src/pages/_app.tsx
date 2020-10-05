import Amplify from 'aws-amplify';
import type { AppProps } from 'next/app';
import { Suspense } from 'react';
import { RelayEnvironmentProvider } from 'react-relay/hooks';

import RelayEnvironment from '../relay/Environment';

Amplify.configure({
  API: {
    aws_appsync_graphqlEndpoint:
      'https://jhv7nldh65fvbgq2x6vfuzr2vi.appsync-api.us-east-1.amazonaws.com/graphql',
    aws_appsync_region: 'us-east-1',
    aws_appsync_authenticationType: 'API_KEY',
    aws_appsync_apiKey: 'da2-yvzw2fpfprag7jq2fcyepir7ue',
  },
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback="fallback">
        <Component {...pageProps} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
};

export default App;
