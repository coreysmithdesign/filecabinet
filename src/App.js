import React from "react";
import { GlobalStyle } from "./global/interface";
import routes from "./routes";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      {routes}
    </div>
  );
}

export default App;
