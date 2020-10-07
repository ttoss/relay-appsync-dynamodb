import {
  Environment,
  Network,
  RecordSource,
  Store,
  FetchFunction,
} from 'relay-runtime';

const fetchQuery: FetchFunction = async (operation, variables) => {
  let data = {};

  const { name, operationKind } = operation;

  if (operationKind === 'query' && name === 'pagesIndexGetDataQuery') {
    data = { user: { id: variables.userId, name: 'Pedro' } };
  }

  return Promise.resolve({ data });
};

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource(), { gcReleaseBufferSize: 10 } as any),
});

export default environment;
