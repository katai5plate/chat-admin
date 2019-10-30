// import React from "react";
// // import logo from "./assets/logo.svg";
// import "./styles/App.css";

import { Admin, Resource, ListGuesser } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";

// const dataProvider = simpleRestProvider("http://jsonplaceholder.typicode.com");

// const App: React.FC = () => {
//   return (
//     <Admin dataProvider={dataProvider}>
//       <Resource name="users" list={ListGuesser} />
//     </Admin>
//   );
// };

// export default App;

import React from "react";
import logo from "./assets/logo.svg";
import "./styles/App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
