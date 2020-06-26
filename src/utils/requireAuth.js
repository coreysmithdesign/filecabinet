import React from "react";
import { connect } from "react-redux";

export default function (ComposedComponent) {
  class Authenticate extends React.Component {
    componentDidMount() {
      if (!this.props.isLoggedIn) {
        // this.props.history.push("/login");
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  const mapStateToProps = (reduxState) => reduxState;

  return connect(mapStateToProps)(Authenticate);
}
