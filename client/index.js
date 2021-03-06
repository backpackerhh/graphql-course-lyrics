import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Router, Switch, Route } from "react-router-dom";
import { createHashHistory } from "history";

import SongList from "./components/SongList";
import SongCreate from "./components/SongCreate";
import SongDetail from "./components/SongDetail";

import "./style/style.css";

const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          songs: {
            merge(existing, incoming) {
              return incoming;
            },
          },
        },
      },
    },
  }),
  uri: "http://localhost:4000/graphql",
});
const history = createHashHistory();

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={history}>
        <div className="container">
          <Switch>
            <Route path="/" exact component={SongList} />
            <Route path="/songs/new" exact component={SongCreate} />
            <Route path="/songs/:songId" exact component={SongDetail} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
