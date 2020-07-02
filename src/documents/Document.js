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
import { icon } from "../global/globals";
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

class Document extends Component {
  constructor(props) {
    super(props);

    this.state = {
      document_name: "",
      note: "",
      employees: [],
      employee_id: "",
      employee_name: "",
      isUploading: false,
      url: "",
      isToggled: false,
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

    axios
      .put(`/api/document/save/${this.props.match.params.id}`, { url })
      .then((res) => {
        console.log("image saved");
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.getDocument();
    this.getEmployees();
  }

  getDocument() {
    axios.get(`/api/document/${this.props.match.params.id}`).then((res) => {
      const {
        document_name,
        document_url,
        note,
        employee_id,
        employee_name,
      } = res.data[0];
      console.log("tthe responst", res.data);
      this.setState({
        document_name: document_name,
        url: document_url,
        note: note,
        employee_id: employee_id,
        employee_name: employee_name,
      });
    });
  }

  getEmployees() {
    axios.get(`/api/employees`).then((res) => {
      this.setState({
        employees: res.data,
      });
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleChangeSelect = (e) => {
    this.setState({
      employee_id: +e.target.value,
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    const { document_name, employee_id, note } = this.state;
    axios
      .put(`/api/document/${this.props.match.params.id}`, {
        document_name,
        employee_id,
        note,
      })
      .then((res) => {
        console.log("success");
      })
      .catch((err) => {
        alert("Could not post");
        console.log(err);
      });
  }

  handleDelete(e) {
    e.preventDefault();
    axios
      .delete(`/api/document/${this.props.match.params.id}`)
      .then((res) => {
        console.log("Document deleted");
        this.props.history.push("/documents");
      })
      .catch((err) => {
        alert("Could not delete");
        console.log(err);
      });
  }

  handleToggle() {
    this.setState({
      isToggled: !this.state.isToggled,
    });
  }

  render() {
    console.log(this.state);
    const { document_name, note, employee_id, url, isUploading } = this.state;

    const employeeList = this.state.employees.map((employee) => (
      <Option key={employee.employee_id} value={employee.employee_id}>
        {employee.employee_name}
      </Option>
    ));

    return (
      <Layout>
        <PageHeader
          icon={icon.file}
          title="Documents"
          link="/documents"
          page={document_name}
        ></PageHeader>
        <PageContent>
          <ToggleForm onClick={() => this.handleToggle()}>
            {icon.form}
          </ToggleForm>
          <PageAside viewing={this.state.isToggled}>
            <Card>
              <Dropzone onDrop={this.getSignedRequest}>
                {({ getRootProps, getInputProps }) => (
                  <section>
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      {isUploading ? (
                        <DropzoneArea>
                          <BarLoader />
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
                <Select
                  name="employee_id"
                  value={employee_id}
                  onChange={(e) => this.handleChangeSelect(e)}
                >
                  <Option key={employee_id}>select</Option>
                  {employeeList}
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

                <Submit type="submit" value="Update" />
              </Form>
              <button onClick={(e) => this.handleDelete(e)}>Delete</button>
            </Card>
          </PageAside>
          <PageMain viewing={this.state.isToggled}>
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

const DropzoneArea = styled.div`
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

const ToggleForm = styled.button`
  all: unset;
  position: absolute;
  bottom: 80px;
  left: 10px;
  background: white;
  border-radius: 100%;
  padding: 1rem;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.5);
  :hover {
    cursor: pointer;
  }
  @media (min-width: 750px) {
    display: none;
  }
`;

export default Document;
