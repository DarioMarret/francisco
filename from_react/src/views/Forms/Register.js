import React from "react";
import swal from 'sweetalert';
import {
  Badge,
  Button,
  Card,
  Form,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { setPropietario } from "../../service/apiPropietarios";
import { setUsuario } from "../../service/apiUsuario";

function Register(props) {
  const { regis, setregis } = props;

  function Alerta(){
    swal({
      title: "Propietario",
      text: "Se registro propietario y usuario exitosamente revisar su email en correo no deseado o bandeja de entrada",
      icon: "success",
      button: "OK",
    }).then(response => setregis(!regis))
    .catch(err => {swal("Oops!", "Lo sentimo algo salio mal vuelve a intentar info", "error");})
  }
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async(formData) => {
      try {
        const response = await setPropietario(formData)
        let user = {
        "acceso_usuario":response.id,
        "apellido":response.apellido,
        "nombre":response.nombre,
        "usuario":response.nombre,
        "password": response.cedula,
        "tipo_propietario":"propietario"
       };
       const responsUsuario = await setUsuario(user)
       if(responsUsuario){
        Alerta()
       }
      } catch (error) {
        swal({
          title:"Error",
          text: error.toString(),
          icon: "error",
        })
      }
    },
  });

  return (
    <Row className="justify-content-center">
      <Col md="6">
        <Form action="" id="RegisterValidation" method="">
          <Card>
            <Card.Header>
              <Card.Title as="h4">Registrar Propietario</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form.Group
                className={
                  "has-label " +
                  (formik.values.cedula ? "has-success" : "has-error")
                }
              >
                <label>
                  Cedula o Ruc <span className="star">*</span>
                </label>
                <Form.Control
                  name="cedula"
                  type="text"
                  value={formik.values.cedula}
                  onChange={(e) =>
                    formik.setFieldValue("cedula", e.target.value)
                  }
                ></Form.Control>
                {!formik.errors.cedula ? null : (
                  <label className="error">Este campo es obligatorio.</label>
                )}
              </Form.Group>

              <Form.Group
                className={
                  "has-label " +
                  (formik.values.nombre ? "has-success" : "has-error")
                }
              >
                <label>
                  Nombre <span className="star">*</span>
                </label>
                <Form.Control
                  name="nombre"
                  type="text"
                  value={formik.values.nombre}
                  onChange={(e) =>
                    formik.setFieldValue("nombre", e.target.value)
                  }
                ></Form.Control>
                {!formik.errors.nombre ? null : (
                  <label className="error">Este campo es obligatorio.</label>
                )}
              </Form.Group>

              <Form.Group
                className={
                  "has-label " +
                  (formik.values.apellido ? "has-success" : "has-error")
                }
              >
                <label>
                  Apellido <span className="star">*</span>
                </label>
                <Form.Control
                  name="apellido"
                  type="text"
                  value={formik.values.apellido}
                  onChange={(e) =>
                    formik.setFieldValue("apellido", e.target.value)
                  }
                ></Form.Control>
                {!formik.errors.apellido ? null : (
                  <label className="error">Este campo es obligatorio.</label>
                )}
              </Form.Group>

              <Form.Group
                className={
                  "has-label " +
                  (formik.values.fecha_nacimiento ? "has-success" : "has-error")
                }
              >
                <label>
                  Fecha Nacimiento <span className="star">*</span>
                </label>
                <Form.Control
                  name="fecha_nacimiento"
                  type="date"
                  onChange={(e) => formik.setFieldValue("fecha_nacimiento",e.target.value)}
                ></Form.Control>
                {!formik.errors.fecha_nacimiento ? null : (
                  <label className="error">Este campo es obligatorio.</label>
                )}
              </Form.Group>

              <Form.Group
                className={
                  "has-label " +
                  (formik.values.fecha_compra ? "has-success" : "has-error")
                }
              >
                <label>
                  Fecha Compra <span className="star">*</span>
                </label>
                <Form.Control
                  name="fecha_compra"
                  type="date"
                  onChange={(e) => formik.setFieldValue("fecha_compra",e.target.value)}
                ></Form.Control>
                {!formik.errors.fecha_compra ? null : (
                  <label className="error">Este campo es obligatorio.</label>
                )}
              </Form.Group> 

              <Form.Group
                className={
                  "has-label " +
                  (formik.values.manzana ? "has-success" : "has-error")
                }
              >
                <label>
                  manzana <span className="star">*</span>
                </label>
                <Form.Control
                  name="manzana"
                  type="text"
                  value={formik.values.manzana}
                  onChange={(e) => formik.setFieldValue("manzana",e.target.value)}
                ></Form.Control>
                {!formik.errors.manzana ? null : (
                  <label className="error">Este campo es obligatorio.</label>
                )}
              </Form.Group>

              <Form.Group
                className={
                  "has-label " +
                  (formik.values.villa ? "has-success" : "has-error")
                }
              >
                <label>
                  Villa <span className="star">*</span>
                </label>
                <Form.Control
                  name="villa"
                  type="text"
                  value={formik.values.villa}
                  onChange={(e) => formik.setFieldValue("villa",e.target.value)}
                ></Form.Control>
                {!formik.errors.villa ? null : (
                  <label className="error">Este campo es obligatorio.</label>
                )}
              </Form.Group>

              <Form.Group
                className={
                  "has-label " +
                  (formik.values.telefono ? "has-success" : "has-error")
                }
              >
                <label>
                  telefono <span className="star">*</span>
                </label>
                <Form.Control
                  name="telefono"
                  type="text"
                  value={formik.values.telefono}
                  onChange={(e) => formik.setFieldValue("telefono",e.target.value)}
                ></Form.Control>
                {!formik.errors.telefono ? null : (
                  <label className="error">Este campo es obligatorio.</label>
                )}
              </Form.Group>

              <Form.Group
                className={
                  "has-label " +
                  (formik.values.email ? "has-success" : "has-error")
                }
              >
                <label>
                  emial <span className="star">*</span>
                </label>
                <Form.Control
                  name="email"
                  value={formik.values.email}
                  onChange={(e) => formik.setFieldValue("email",e.target.value)}
                ></Form.Control>
                {!formik.errors.email ? null : (
                  <label className="error">Este campo es obligatorio.</label>
                )}
              </Form.Group>

              <div className="card-category form-category">
                Todo los campos con <span className="star">*</span> son
                requeridos
              </div>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
            <Button
                className="btn-fill"
                variant="danger"
                onClick={()=>setregis(!regis)}
              >
                Regresar
              </Button>

              <Button
                className="btn-fill"
                variant="info"
                onClick={formik.handleSubmit}
              >
                Register
              </Button>
            </Card.Footer>
          </Card>
        </Form>
      </Col>
    </Row>
  );
}
function initialValues() {
    return {
        cedula:"",
        nombre:"",
        apellido:"",
        fecha_nacimiento:"",
        fecha_compra:"",
        manzana:"",
        villa:"",
        telefono:"",
        email:"",
        estado:true
    };
  }
  function validationSchema() {
    return {
      cedula: Yup.number(true).required(true),
      nombre: Yup.string(true).required(true),
      apellido: Yup.string(true).required(true),
      email: Yup.string(true).email(true).required(true),
      fecha_nacimiento: Yup.date(true).required(true),
      fecha_compra: Yup.date(true).required(true),
      manzana: Yup.string(true).required(true),
      villa: Yup.string(true).required(true),
      telefono: Yup.number(true).required(true),
      estado: Yup.boolean(true),
    };
}
export default Register;