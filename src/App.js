import React from "react";
import { useSelector } from "react-redux";
import { GlobalStyle } from "./global/Interface";
import routes from "./routes";

function App(props) {
  const user = useSelector((state) => state);
  console.log(user);
  return (
    <div className="App">
      <GlobalStyle />
      {routes}
    </div>
  );
}

export default App;
