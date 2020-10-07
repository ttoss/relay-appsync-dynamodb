/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type pagesIndexGetDataQueryVariables = {
    userId: string;
};
export type pagesIndexGetDataQueryResponse = {
    readonly user: {
        readonly id: string;
        readonly name: string | null;
    } | null;
};
export type pagesIndexGetDataQuery = {
    readonly response: pagesIndexGetDataQueryResponse;
    readonly variables: pagesIndexGetDataQueryVariables;
};



/*
query pagesIndexGetDataQuery(
  $userId: ID!
) {
  user(id: $userId) {
    id
    name
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "userId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "userId"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "user",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "pagesIndexGetDataQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "pagesIndexGetDataQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "4c200615c3419d2c6579db798b077568",
    "id": null,
    "metadata": {},
    "name": "pagesIndexGetDataQuery",
    "operationKind": "query",
    "text": "query pagesIndexGetDataQuery(\n  $userId: ID!\n) {\n  user(id: $userId) {\n    id\n    name\n  }\n}\n"
  }
};
})();
(node as any).hash = '973a3b16b219935b24bd056ea52885d0';
export default node;
