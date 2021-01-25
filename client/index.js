import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { Router, Switch, Route } from "react-router-dom";
import { createHashHistory } from "history";

import SongList from "./components/SongList";

const client = new ApolloClient({});
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
