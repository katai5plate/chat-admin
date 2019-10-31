import React from "react";
// import logo from "./assets/logo.svg";
import "./styles/App.css";

import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import fakeServerProvider from "ra-data-fakerest";

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
    <Admin dataProvider={dataProvider}>
      <Resource name="posts" list={ListGuesser} />
    </Admin>
  );
};

export default App;
