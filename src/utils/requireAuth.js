import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

export default function (ComposedComponent) {
  class Authenticate extends React.Component {
    render() {
      console.log(this.props);
      if (this.props.isLoading) {
        return <p>Loading...</p>;
      } else if (!this.props.isLoading && !this.props.isLoggedIn) {
        return <Redirect to="/login" />;
      } else {
        return <ComposedComponent {...this.props} />;
      }
    }
  }

  const mapStateToProps = (reduxState) => reduxState;

  return connect(mapStateToProps)(Authenticate);
}
