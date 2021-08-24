import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useUser from "../../service/hook/user";
import { Login } from "../../service/apiLogin";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Col,
} from "react-bootstrap";

function LoginPage() {
  const { login } = useUser();
  const [cardClasses, setCardClasses] = React.useState("card-hidden");
  React.useEffect(() => {
    setTimeout(function () {
      setCardClasses("");
    }, 1000);
  });
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      console.log(formData);
      const rest = await Login(formData);
      if (rest) login(rest);
    },
  });
  return (
    <>
      <div
        className="full-page section-image"
        data-color="black"
        data-image={require("assets/img/full-screen-image-2.jpg").default}
      >
        <div className="content d-flex align-items-center p-0">
          <Container>
            <Col className="mx-auto" lg="4" md="8">
              <Form action="" className="form" method="">
                <Card className={"card-login " + cardClasses}>
                  <Card.Header>
                    <h3 className="header text-center">Login</h3>
                  </Card.Header>
                  <Card.Body>
                    <Card.Body>
                      <Form.Group>
                        <label>Email address</label>
                        <Form.Control
                          placeholder="Enter Usuario"
                          type="text"
                          onChange={(e) => formik.setFieldValue("usuario", e.target.value)}
                          value={formik.values.usuario}
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group>
                        <label>Password</label>
                        <Form.Control
                          placeholder="Password"
                          onChange={(e) => formik.setFieldValue("password", e.target.value)}
                          value={formik.values.password}
                        ></Form.Control>
                      </Form.Group>
                      <Form.Check className="pl-0">
                        <Form.Check.Label>
                          <Form.Check.Input
                            defaultChecked
                            type="checkbox"
                          ></Form.Check.Input>
                          <span className="form-check-sign"></span>
                          Subscribe to newsletter
                        </Form.Check.Label>
                      </Form.Check>
                    </Card.Body>
                  </Card.Body>
                  <Card.Footer className="ml-auto mr-auto text-center">
                    <Button className="btn-wd" onClick={formik.handleSubmit} variant="warning">
                      Login
                    </Button>
                  </Card.Footer>
                </Card>
              </Form>
            </Col>
          </Container>
        </div>
        <div
          className="full-page-background"
          style={{
            backgroundImage:
              "url(" +
              require("assets/img/full-screen-image-2.jpg").default +
              ")",
          }}
        ></div>
      </div>
    </>
  );
}
function initialValues() {
  return {
    usuario: "",
    password: "",
  };
}
function validationSchema() {
  return {
    usuario: Yup.string(true).required(true),
    password: Yup.string(true).required(true),
  };
}
export default LoginPage;
