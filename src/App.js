import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "./redux/reducer";
import { GlobalStyle } from "./global/globals";
import routes from "./routes";

class App extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    console.log("from app", this.props);
    return (
      <div className="App">
        <GlobalStyle />
        {routes}
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { getUser })(App);
