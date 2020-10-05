import { API, graphqlOperation } from 'aws-amplify';
import {
  Environment,
  Network,
  RecordSource,
  Store,
  FetchFunction,
  SubscribeFunction,
} from 'relay-runtime';

const fetchQuery: FetchFunction = async (operation, variables) => {
  try {
    return (await API.graphql(
      graphqlOperation(operation.text, variables),
    )) as any;
  } catch (error) {
    if (error.errors && error.errors.length > 0) {
      throw error.errors[0];
    }
    throw error;
  }
};

const subscribe: SubscribeFunction = (operation, variables) => {
  return (API.graphql(graphqlOperation(operation.text, variables)) as any).map(
    ({ value }: any) => value,
  );
};

const environment = new Environment({
  network: Network.create(fetchQuery, subscribe),
  store: new Store(new RecordSource(), { gcReleaseBufferSize: 10 } as any),
});

export default environment;
