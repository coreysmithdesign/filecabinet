import React, { Component } from "react";
import axios from "axios";
import Layout from "../layout/Layout";
import PageHeader from "../layout/PageHeader";
import PageContent from "../layout/PageContent";
import PageMain from "../layout/PageMain";
import { icon } from "../global/globals";
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
    console.log(this.state);
    const documentList = this.state.documents.map((document) => (
      <TableRowLink
        key={document.document_id}
        to={`/documents/${document.document_id}`}
      >
        <TableCell>
          {icon.file} {document.document_name}
        </TableCell>
        <TableCell>{document.employee_name}</TableCell>
        <TableCell>{document.note}</TableCell>
      </TableRowLink>
    ));

    return (
      <Layout>
        <PageHeader icon={icon.files} title="Documents"></PageHeader>
        <PageContent>
          <PageMain>
            <Table>
              <TableHeader>
                <TableCell>Document Title</TableCell>
                <TableCell>Employee</TableCell>
                <TableCell>Notes</TableCell>
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
