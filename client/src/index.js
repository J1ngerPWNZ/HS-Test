import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {ApolloProvider} from "@apollo/client";
import {client} from "./graphql/apollo";

import './index.css';
import 'antd/dist/antd.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>
);
