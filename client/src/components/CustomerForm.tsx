import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { closeModal } from "../redux";
import { connect } from "react-redux";
import Http from "../services/Http";
import { useEffect, useState } from "react";

function CustomerForm(props: any) {
  const httpService = new Http();
  const [dob, setDob] = useState<Date>();

  const handleClose = () => props.closeModal();

  const { register, handleSubmit, errors, setValue } = useForm(); // initialize the hook

  useEffect(() => {
    if (props.isModalOpenToEdit) {
      httpService
        .fetch(`api/customers/${props.editCustomerId}`)
        .then((res: any) => {
          console.log("res", res.data.data);
          const data = res.data.data;
          setValue("firstName", data.firstName);
          setValue("lastName", data.lastName);
          setValue("bio", data.bio);
          setValue("occupation", data.occupation);
          setDob(new Date(data.dob));
        })
        .catch((error) => console.log("Error:", error));
    }
  }, [props.isModalOpenToEdit]);

  const onSubmit = (data: any) => {
    props.isModalOpenToEdit ? update(data) : save(data);
  };

  function save(data: any) {
    const body = new FormData();
    body.append("firstName", data.firstName);
    body.append("lastName", data.lastName);
    if (!!dob) {
      body.append("dob", dob.toString());
    }
    body.append("bio", data.bio);
    body.append("occupation", data.occupation);
    data.profilePicture.length > 0 &&
      body.append("profilePicture", data.profilePicture[0]);
    httpService
      .post("api/customers", body)
      .then((res: any) => {
        handleClose();
      })
      .catch((error: any) => console.log("Error:", error));
  }

  function update(data: any) {
    if (!!dob) {
      data.dob = dob;
    }
    if (data.profilePicture.length > 0) {
      data.profilePicture = data.profilePicture[0];
    } else {
      delete data.profilePicture;
    }
    httpService
      .put(`api/customers/${props.editCustomerId}`, data)
      .then((res: any) => {
        handleClose();
      })
      .catch((error: any) => console.log("Error:", error));
  }

  function dobChange(event: any) {
    const dob = event.toDate();
    setDob(dob);
  }

  return (
    <>
      <Modal size="lg" show={props.isModalOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {props.isModalOpenToEdit ? "Edit customer" : "Add customer"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col>
                <Form.Group controlId="formFirstName">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter first name"
                    ref={register({ required: true })}
                    name="firstName"
                  />
                  <Form.Text className="text-danger">
                    {errors.firstname && "First name is required."}
                  </Form.Text>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="formLastName">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter last name"
                    ref={register}
                    name="lastName"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group controlId="formOccupation">
                  <Form.Label>Occupation</Form.Label>
                  <Form.Control as="select" ref={register} name="occupation">
                    <option>Employed</option>
                    <option>Business</option>
                    <option>Student</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formDOB">
                  <Form.Label>DOB</Form.Label>
                  <Datetime
                    value={dob}
                    onChange={(value) => dobChange(value)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group controlId="formBio">
                  <Form.Label>Bio</Form.Label>
                  <Form.Control
                    ref={register}
                    as="textarea"
                    rows={3}
                    name="bio"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.File
                    id="formProfilePicture"
                    label="Profile Picture"
                    ref={register}
                    name="profilePicture"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="float-right">
              <Button variant="secondary right" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary ml-3" type="submit">
                {props.isModalOpenToEdit ? "Update" : "Save"}
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

const mapStateToProps = (state: any) => {
  return {
    isModalOpen: state.modal.isOpen,
    isModalOpenToEdit: state.modal.isModalOpenToEdit,
    editCustomerId: state.modal.editId,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerForm);
