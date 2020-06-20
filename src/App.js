import React from "react";
import { GlobalStyle } from "./global/Interface";
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
