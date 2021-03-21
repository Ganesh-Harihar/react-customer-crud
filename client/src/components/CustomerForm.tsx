import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
function CustomerForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { register, handleSubmit, errors } = useForm(); // initialize the hook
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <Button
        variant="outline-secondary"
        className="add-btn"
        onClick={handleShow}
      >
        Add
      </Button>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add customer</Modal.Title>
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
                    name="firstname"
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
                    name="lastname"
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
                    <option>Bussiness</option>
                    <option>Student</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formDOB">
                  <Form.Label>DOB</Form.Label>
                  <Datetime ref={register} />
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
                    name="prrofilePic"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="float-right">
              <Button variant="secondary right" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary ml-3" type="submit">
                Save
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CustomerForm;
