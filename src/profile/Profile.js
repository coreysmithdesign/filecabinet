import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getUser } from "../redux/reducer";
import Layout from "../layout/Layout";
import PageContent from "../layout/PageContent";
import PageHeader from "../layout/PageHeader";
import PageMain from "../layout/PageMain";
import { Form, FormSection, Label, Input } from "../global/Form";

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      full_name: "",
      email: "",
    };
  }

  componentDidMount() {
    console.log("component did mount:", this.props);
    const { user_id } = this.props.user;
    axios.get(`/api/auth/user/${user_id}`).then((res) => {
      console.log("axios user get response", res.data);
      const { username, full_name, email } = res.data;
      this.setState({
        username: username,
        full_name: full_name,
        email: email,
      });
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { username, full_name, email } = this.state;
    return (
      <Layout>
        <PageHeader title="Profile"></PageHeader>
        <PageContent>
          <PageMain>
            <Form>
              <FormSection>Profile Information</FormSection>
              <Label htmlFor="username">Username</Label>
              <Input disabled type="text" name="username" value={username} />
              <Label htmlFor="full_name">Full Name</Label>
              <Input
                type="text"
                name="full_name"
                value={full_name}
                onChange={(e) => this.handleChange(e)}
              />
              <Label htmlFor="email">Email</Label>
              <Input
                type="text"
                name="email"
                value={email}
                onChange={(e) => this.handleChange(e)}
              />
            </Form>
          </PageMain>
        </PageContent>
      </Layout>
    );
  }
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { getUser })(Profile);
