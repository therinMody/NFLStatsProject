import React from 'react';
import ReactDOM from 'react-dom';
import Pages from './pages';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    //for local http://localhost:4000
    uri: 'http://localhost:4000',
    cache: new InMemoryCache(),
});

ReactDOM.render(
    <ApolloProvider client={client}>
        
        <Pages/>

    </ApolloProvider>,
    document.getElementById('root')
);