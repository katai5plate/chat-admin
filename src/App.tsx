import React from "react";
// import logo from "./assets/logo.svg";
import "./styles/App.css";

import jsonServerProvider from "ra-data-json-server";
import fakeServerProvider from "ra-data-fakerest";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ChatPage from "./components/pages/Chat";
import AdminPage from "./components/pages/Admin";

const dataProvider = (url => {
  const isLocalServer = /localhost/.test(window.location.href);
  if (isLocalServer) {
    return jsonServerProvider(url);
  }
  return fakeServerProvider({
    posts: [
      { username: "hoge", comment: "hwapiojfaijpiawupiofemaipofwm" },
      { username: "huga", comment: "ofwkofkweojwfijwefihjwefiohjd" }
    ]
  });
})("http://localhost:3001");

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ChatPage} />
        <Route
          path="/admin/"
          component={() => <AdminPage dataProvider={dataProvider} />}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
