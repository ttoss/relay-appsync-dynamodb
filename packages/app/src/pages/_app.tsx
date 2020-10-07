import type { AppProps } from 'next/app';
import { Suspense } from 'react';
import { RelayEnvironmentProvider } from 'react-relay/hooks';

import RelayEnvironment from '../relay/Environment';

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
