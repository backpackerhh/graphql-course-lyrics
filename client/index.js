import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Router, Switch, Route } from "react-router-dom";
import { createHashHistory } from "history";

import SongList from "./components/SongList";
import SongCreate from "./components/SongCreate";

const client = new ApolloClient({
  cache: new InMemoryCache(),
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
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
