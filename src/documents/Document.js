import React, { Component } from "react";
import axios from "axios";
import { v4 as randomString } from "uuid";
import Dropzone from "react-dropzone";
import { BarLoader } from "react-spinners";
import styled from "styled-components";
import Layout from "../layout/Layout";
import PageHeader from "../layout/PageHeader";
import PageContent from "../layout/PageContent";
import PageMain from "../layout/PageMain";
import PageAside from "../layout/PageAside";
import { icon } from "../global/Interface";
import { Card } from "../global/Card";
import {
  Form,
  Label,
  Input,
  Submit,
  TextArea,
  Select,
  Option,
} from "../global/Form";

const DropzoneArea = styled.p`
  border: 1px dashed #dddddd;
  background-color: #ebebf0;
  padding: 1rem 0;
  text-align: center;
  border-radius: 4px;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DropzoneInstruction = styled.span`
  font-size: 1rem;
  margin-top: 0.5rem;
`;

class Document extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      document_name: "",
      note: "",
      isUploading: false,
      url: "http://via.placeholder.com/450x450",
    };
  }

  getSignedRequest = ([file]) => {
    this.setState({ isUploading: true });
    // We are creating a file name that consists of a random string, and the name of the file that was just uploaded with the spaces removed and hyphens inserted instead. This is done using the .replace function with a specific regular expression. This will ensure that each file uploaded has a unique name which will prevent files from overwriting other files due to duplicate names.
    const fileName = `${randomString()}-${file.name.replace(/\s/g, "-")}`;

    // We will now send a request to our server to get a "signed url" from Amazon. We are essentially letting AWS know that we are going to upload a file soon. We are only sending the file-name and file-type as strings. We are not sending the file itself at this point.
    axios
      .get("/api/signs3", {
        params: {
          "file-name": fileName,
          "file-type": file.type,
        },
      })
      .then((response) => {
        const { signedRequest, url } = response.data;
        this.uploadFile(file, signedRequest, url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  uploadFile = (file, signedRequest, url) => {
    const options = {
      headers: {
        "Content-Type": file.type,
      },
    };

    axios
      .put(signedRequest, file, options)
      .then((response) => {
        this.setState({ isUploading: false, url });
        // THEN DO SOMETHING WITH THE URL. SEND TO DB USING POST REQUEST OR SOMETHING
      })
      .catch((err) => {
        this.setState({
          isUploading: false,
        });
        if (err.response.status === 403) {
          alert(
            `Your request for a signed URL failed with a status 403. Double check the CORS configuration and bucket policy in the README. You also will want to double check your AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY in your .env and ensure that they are the same as the ones that you created in the IAM dashboard. You may need to generate new keys\n${err.stack}`
          );
        } else {
          alert(`ERROR: ${err.status}\n ${err.stack}`);
        }
      });
  };

  componentDidMount() {
    this.getDocument();
  }

  getDocument() {
    axios.get(`/api/document/${this.props.match.params.id}`).then((res) => {
      const { id, document_name, note } = res.data[0];

      this.setState({
        id: id,
        document_name: document_name,
        note: note,
      });
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    const { document_name, note, id } = this.state;
    axios
      .put(`/api/document/${id}`, { document_name, note })
      .then((res) => {
        console.log("success");
      })
      .catch((err) => {
        alert("Could not post");
        console.log(err);
      });
  }

  render() {
    console.log(this.state);
    const { note, document_name, url, isUploading } = this.state;

    return (
      <Layout>
        <PageHeader title="Documents" link="/documents"></PageHeader>
        <PageContent>
          <PageAside>
            <Card>
              <Dropzone onDrop={this.getSignedRequest}>
                {({ getRootProps, getInputProps }) => (
                  <section>
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      {isUploading ? (
                        <DropzoneArea>
                          <BarLoader color={"#ee5960"} />
                          <DropzoneInstruction>
                            Attaching file...
                          </DropzoneInstruction>
                        </DropzoneArea>
                      ) : (
                        <DropzoneArea>
                          {icon.upload}
                          <DropzoneInstruction>
                            Attach file here
                          </DropzoneInstruction>
                        </DropzoneArea>
                      )}
                    </div>
                  </section>
                )}
              </Dropzone>

              <Form onSubmit={(e) => this.handleSubmit(e)}>
                <Label htmlFor="document_name">Document Name</Label>
                <Input
                  type="text"
                  name="document_name"
                  value={document_name}
                  onChange={(e) => this.handleChange(e)}
                />

                <Label htmlFor="employee_id">Belongs To</Label>
                <Select name="employee_id">
                  <Option>Corey Smith</Option>
                </Select>

                <Label htmlFor="note">Note</Label>
                <TextArea
                  type="text"
                  name="note"
                  value={note}
                  onChange={(e) => this.handleChange(e)}
                >
                  {note}
                </TextArea>

                <Submit type="submit" value="Submit" />
              </Form>
            </Card>
          </PageAside>
          <PageMain>
            <iframe
              id="fred"
              title="PDF in an i-Frame"
              src={url}
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
