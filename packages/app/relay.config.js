module.exports = {
  artifactDirectory: './src/__generated__',
  language: 'typescript',
  src: '.',
  schema: '../appsync/src/schema.graphql',
  exclude: ['**/node_modules/**', '**/__mocks__/**', '**/__generated__/**'],
};
