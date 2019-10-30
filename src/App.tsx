import React from "react";
// import logo from "./assets/logo.svg";
import "./styles/App.css";

import { Admin, Resource, ListGuesser } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";

const dataProvider = simpleRestProvider("http://jsonplaceholder.typicode.com");

const App: React.FC = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="users" list={ListGuesser} />
    </Admin>
  );
};

export default App;
