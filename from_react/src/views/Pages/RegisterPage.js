import React, {useState} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Registrar } from "../../service/apiLogin";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Media,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  FormControl
} from "react-bootstrap";
import { useHistory } from "react-router-dom";

function RegisterPage() {

  const history = useHistory();
  const [loading, setloading] = useState(false);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      console.log(formData)
        setloading(true);
      const rest = await Registrar(formData);
      if (rest){
        history.push("/auth/login-page")
      }else{
        setloading(false);
      }
    },
  });

  return (
    <>
      <div
        className="full-page register-page section-image"
        data-color="orange"
        data-image={require("assets/img/bg5.jpg").default}
      >
        <div className="content d-flex align-items-center">
          <Container>
            <Card className="card-register card-plain text-center">
              <Card.Header>
                <Row className="justify-content-center">
                  <Col md="8">
                    <div className="header-text">
                      <Card.Title as="h2">
                        Panel de Control Ciudadela las Conchas
                      </Card.Title>
                      <Card.Subtitle as="h4">
                        Register for free and experience the dashboard today
                      </Card.Subtitle>
                      <hr></hr>
                    </div>
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col className="ml-auto" md="7" lg="5">
                    <Media>
                      <div className="media-left">
                        <div className="icon">
                          <i className="nc-icon nc-circle-09"></i>
                        </div>
                      </div>
                      <Media.Body>
                        <h4>Cuenta gratis</h4>
                        <p>
                        Aquí puede escribir una descripción de la función para su panel, dejar que los usuarios sepan cuál es el valor que les da.
                        </p>
                      </Media.Body>
                    </Media>
                    <Media>
                      <div className="media-left">
                        <div className="icon">
                          <i className="nc-icon nc-preferences-circle-rotate"></i>
                        </div>
                      </div>
                      <Media.Body>
                        <h4>Actuaciones impresionantes</h4>
                        <p>
                          Aquí puede escribir una descripción de la función para su panel, dejar que los usuarios sepan cuál es el valor que les da..
                        </p>
                      </Media.Body>
                    </Media>
                    <Media>
                      <div className="media-left">
                        <div className="icon">
                          <i className="nc-icon nc-planet"></i>
                        </div>
                      </div>
                      <Media.Body>
                        <h4>Soporte global</h4>
                        <p>
                          Aquí puede escribir una descripción de la función para su panel, dejar que los usuarios sepan cuál es el valor que les da..
                        </p>
                      </Media.Body>
                    </Media>
                  </Col>
                  {/* Formulario */}
                  <Col className="mr-auto" md="5" lg="4">
                    <Form action="#" method="#">
                      <Card className="card-plain">
                        <div className="card-body">
                          <Form.Group> 
                            <Form.Control
                              placeholder="Nombre Completo"
                              type="text"
                              onChange={(e) => formik.setFieldValue("nombre", e.target.value)}
                              value={formik.values.nombre}
                            ></Form.Control>
                          </Form.Group>
                          <Form.Group>
                            <Form.Control
                              placeholder="Apellido Completo"
                              type="text"
                              onChange={(e) => formik.setFieldValue("apellido", e.target.value)}
                              value={formik.values.apellido}
                            ></Form.Control>
                          </Form.Group>
                          <Form.Group>
                            <Form.Control
                              placeholder="Correo electronico"
                              type="email"
                              onChange={(e) => formik.setFieldValue("email", e.target.value)}
                              value={formik.values.email}
                            ></Form.Control>
                          </Form.Group>
                          <Form.Group>
                            <select className="form-control" name="" id=""
                              onChange={(e) => formik.setFieldValue("tipo_propietario", e.target.value)}
                              value={formik.values.tipo_propietario}
                            >
                              <option value="">Tipo de Usuario</option>
                              <option value="Propietario">Propietario</option>
                              <option value="Inquilinos">Inquilinos</option>
                            </select>
                          </Form.Group>
                          <Form.Group>
                            <Form.Control
                              placeholder="Usuario"
                              type="text"
                              onChange={(e) => formik.setFieldValue("usuario", e.target.value)}
                              value={formik.values.usuario}
                            ></Form.Control>
                          </Form.Group>
                          <Form.Group>
                            <Form.Control
                              placeholder="Contraseña"
                              type="password"
                              onChange={(e) => formik.setFieldValue("password", e.target.value)}
                              value={formik.values.password}
                            ></Form.Control>
                          </Form.Group>
                        </div>
                        <div className="card-footer text-center">
                          <Button
                            className="btn-fill btn-neutral btn-wd"
                            type="submit"
                            variant="default"
                            onClick={formik.handleSubmit}
                            loading={loading}
                          >
                            Create Free Account
                          </Button>
                        </div>
                      </Card>
                    </Form>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Container>
        </div>
        <div
          className="full-page-background"
          style={{
            backgroundImage:
              "url(" + require("assets/img/bg5.jpg").default + ")",
          }}
        ></div>
      </div>
    </>
  );
}
function initialValues() {
  return {
    nombre: "",
    apellido: "",
    usuario: "",
    password: "",
    email: "",
    tipo_propietario: "",
  };
}
function validationSchema() {
  return {
    nombre: Yup.string(true).required(true),
    apellido: Yup.string(true).required(true),
    usuario: Yup.string(true).required(true),
    password: Yup.string(true).required(true),
    email: Yup.string(true).email(true).required(true),
    tipo_propietario: Yup.string(true).required(true),
  };
}
export default RegisterPage;
