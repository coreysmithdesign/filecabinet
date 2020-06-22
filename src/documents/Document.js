import React, { Component } from "react";
import axios from "axios";
import Layout from "../layout/Layout";
import PageHeader from "../layout/PageHeader";
import PageContent from "../layout/PageContent";
import PageMain from "../layout/PageMain";
import PageAside from "../layout/PageAside";
import { Card, CardTitle, CardLabel, CardInfo } from "../global/Card";

class Document extends Component {
  constructor(props) {
    super(props);

    this.state = {
      document: {},
    };
  }

  componentDidMount() {
    this.getDocument();
  }

  getDocument() {
    axios.get(`/api/document/${this.props.match.params.id}`).then((res) => {
      this.setState({
        document: res.data[0],
      });
    });
  }

  render() {
    console.log(this.state);
    const { note, date_added, document_name } = this.state.document;
    return (
      <Layout>
        <PageHeader title="Documents" link="/documents"></PageHeader>
        <PageContent>
          <PageAside>
            <Card>
              <CardTitle>Document Details</CardTitle>
              <CardLabel>PDF File</CardLabel>
              <CardInfo>Upload a pdf</CardInfo>
              <CardLabel>Folder(s)</CardLabel>
              <CardInfo>Folders this is found in</CardInfo>
              <CardLabel>Name</CardLabel>
              <CardInfo>{document_name}</CardInfo>
              <CardLabel>Date</CardLabel>
              <CardInfo>{date_added}</CardInfo>
              <CardLabel>Note</CardLabel>
              <CardInfo>{note}</CardInfo>
            </Card>
          </PageAside>
          <PageMain>
            <iframe
              id="fred"
              title="PDF in an i-Frame"
              src="http://www.pdf995.com/samples/pdf.pdf"
              frameBorder="0"
              scrolling="auto"
              height="100%"
              width="100%"
            ></iframe>
          </PageMain>
        </PageContent>
      </Layout>
    );
  }
}

export default Document;
