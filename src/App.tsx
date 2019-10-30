import React from "react";
// import logo from "./assets/logo.svg";
import "./styles/App.css";

import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider("http://jsonplaceholder.typicode.com");

const App: React.FC = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="users" list={ListGuesser} />
    </Admin>
  );
};

export default App;
