import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';

import Navigation from './components/Navigation'

import 'semantic-ui-css/semantic.min.css';

const client = new ApolloClient({ uri: 'http://localhost:8081/graphql' });

const ApolloApp = () => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Navigation />
    </ApolloProvider>
  </BrowserRouter>
);

ReactDOM.render(<ApolloApp />, document.getElementById('root'));
registerServiceWorker();
