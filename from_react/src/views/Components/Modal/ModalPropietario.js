import React from 'react';
import {
    Badge,
    Button,
    Form,
    Card,
    Modal,
    InputGroup,
    Navbar,
    Nav,
    Table,
    Container,
    Row,
    Col,
    OverlayTrigger,
    Tooltip,
  } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

function ModalPropietario(props) {
    const { setModal, modal } = props;

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: (formData) => {
          console.log(formData)
        }
      });
    return (
        <Modal
          className="modal modal-primary"
          onHide={() => setModal(!modal)}
          show={modal}
        >
          <Modal.Header className="justify-content-center">
            <div className="modal-profile">
              <i className="nc-icon nc-circle-09 icon-bold"></i>
            </div>
          </Modal.Header>
          <Modal.Body className="text-right">
            <p className="text-center">Crear un nuevo usuario para el propietario</p>

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
                  (formik.values.usuario ? "has-success" : "has-error")
                }
              >
                <label>
                  Usuario <span className="star">*</span>
                </label>
                <Form.Control
                  name="usuario"
                  type="text"
                  value={formik.values.usuario}
                  onChange={(e) =>
                    formik.setFieldValue("usuario", e.target.value)
                  }
                ></Form.Control>
                {!formik.errors.usuario ? null : (
                  <label className="error">Este campo es obligatorio.</label>
                )}
              </Form.Group>

              <Form.Group
                className={
                  "has-label " +
                  (formik.values.password ? "has-success" : "has-error")
                }
              >
                <label>
                  Password <span className="star">*</span>
                </label>
                <Form.Control
                  name="password"
                  type="password"
                  value={formik.values.password}
                  onChange={(e) =>
                    formik.setFieldValue("password", e.target.value)
                  }
                ></Form.Control>
                {!formik.errors.password ? null : (
                  <label className="error">Este campo es obligatorio.</label>
                )}
              </Form.Group>

              <Form.Group
                className={
                  "has-label " +
                  (formik.values.cedula ? "has-success" : "has-error")
                }
              >
                <label>
                  Tipo de usuario <span className="star">*</span>
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

          </Modal.Body>
          <div className="modal-footer">
            <Button
              className="btn-simple"
              onClick={() => setModal(!modal)}
              variant="link"
            >
              Back
            </Button>
            <Button
              className="btn-simple"
              onClick={() => setModal(!modal)}
              variant="link"
            >
              Close
            </Button>
          </div>
        </Modal>
    );
}
function initialValues() {
    return {
        acceso_usuario:"",
        apellido:"",
        nombre:"",
        usuario:"",
        password: "",
        tipo_propietario:""
    };
  }
  function validationSchema() {
    return {
        apellido: Yup.string(true).required(true),
        nombre: Yup.string(true).required(true),
        usuario: Yup.string(true).email(true).required(true),
        password: Yup.date(true).required(true),
        tipo_propietario: Yup.date(true).required(true),
    };
}
export default ModalPropietario;