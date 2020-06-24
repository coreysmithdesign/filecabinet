import React, { Component } from "react";
import axios from "axios";
import Layout from "../layout/Layout";
import PageHeader from "../layout/PageHeader";
import PageContent from "../layout/PageContent";
import PageMain from "../layout/PageMain";
import Search from "../global/Search";
import { Table, TableHeader, TableRowLink, TableCell } from "../global/Table";

class Documents extends Component {
  constructor() {
    super();

    this.state = {
      documents: [],
    };
  }

  componentDidMount() {
    this.getDocuments();
  }

  getDocuments() {
    axios.get(`/api/documents`).then((res) => {
      this.setState({
        documents: res.data,
      });
    });
  }

  render() {
    const documentList = this.state.documents.map((document) => (
      <TableRowLink key={document.id} to={`/documents/${document.id}`}>
        <TableCell>{document.document_name}</TableCell>
        <TableCell>{document.id}</TableCell>
        <TableCell>{document.note}</TableCell>
      </TableRowLink>
    ));

    return (
      <Layout>
        <PageHeader title="Documents">
          <Search />
        </PageHeader>
        <PageContent>
          <PageMain>
            <Table>
              <TableHeader>
                <TableCell>Document</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Note</TableCell>
              </TableHeader>
              {documentList}
            </Table>
          </PageMain>
        </PageContent>
      </Layout>
    );
  }
}

export default Documents;
