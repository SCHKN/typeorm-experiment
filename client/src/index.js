import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Routes from './components/Routes'

import 'semantic-ui-css/semantic.min.css';

const client = new ApolloClient({ uri: 'http://localhost:8081/graphql' });

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
);

ReactDOM.render(<ApolloApp />, document.getElementById('root'));
registerServiceWorker();
