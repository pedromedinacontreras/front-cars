import ApolloClient, { createNetworkInterface } from 'apollo-client';

const networkInterface = createNetworkInterface({
  uri: 'http://35.185.96.240/api',
});
networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
    req.options.headers = {}; // eslint-disable-line
    }

    // const token = 'token';
    // req.options.headers.authorization = token ? `Bearer ${token}` : null; // eslint-disable-line
    next();
  },
}]);
const client = new ApolloClient({
  networkInterface,
  reduxRootSelector: (state) => state.get('apollo'),
});

export default client;

export const apolloReducer = client.reducer();
