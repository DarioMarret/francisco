import React, { useEffect, useState } from "react";

import {
  Badge,
  Button,
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
import Register from "views/Forms/Register";
import ModalPropietario from "views/Components/Modal/ModalPropietario";
import { getPropietario } from "../../service/apiPropietarios";

function Propietarios() {
  const [propietarios, setpropietarios] = useState(null);
  const [regis, setregis] = useState(true);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPropietario();
        setpropietarios(response);
        console.log(response);
      } catch (error) {
        alert(error.message);
      }
    })();
  }, []);

  const Propietario = () => {
    return (
      <>
        {propietarios
          ? propietarios.map((p) => (
              <tr>
                <td className="text-center">{p.cedula}</td>
                <td className="text-center">{p.apellido} {p.nombre}</td>
                <td className="text-center">{p.manzana}</td>
                <td className="text-center">{p.villa}</td>
                <td className="text-center">
                {/* editar propietario */}
                  <OverlayTrigger
                    overlay={
                      <Tooltip id="tooltip-461494662">Edit us..</Tooltip>
                    }
                    placement="left"
                  >
                    <Button
                      className="btn-link btn-icon"
                      type="button"
                      variant="success"
                    >
                      <i className="fas fa-edit"></i>
                    </Button>
                  </OverlayTrigger>
                  {/* crear nuevo usuario familiar, contador, inquilino ecetera */}
                  <OverlayTrigger
                    overlay={
                      <Tooltip id="tooltip-408856985">Añadir us..</Tooltip>
                    }
                    placement="left"
                  >
                    <Button
                      className="btn-link btn-icon"
                      type="button"
                      variant="info"
                      onClick={() => setModal(!modal)}
                    >
                      <i className="nc-icon nc-single-02"></i>
                    </Button>
                  </OverlayTrigger>
                  {/* eliminar promietario de la lista */}
                  <OverlayTrigger
                    overlay={
                      <Tooltip id="tooltip-408856985">Remove us..</Tooltip>
                    }
                    placement="left"
                  >
                    <Button
                      className="btn-link btn-icon"
                      type="button"
                      variant="danger"
                    >
                      <i className="fas fa-times"></i>
                    </Button>
                  </OverlayTrigger>
                </td>
              </tr>
            ))
          : ""}
      </>
    );
  };

  return  (
  (regis) ? (
    <div>
      <Container>
        <Row>
          <Col md="12">
            <Card className="table-big-boy">
              <Card.Header>
                <Card.Title as="h4">Lista de Propietarios Legal</Card.Title>
                <p className="card-category"> Detalle, ubicacion y referencia de la vivienda </p>
                <button className="btn-social btn btn-github" onClick={()=>setregis(!regis)}>
                  Registrar propietario
                </button>
                <br></br>
              </Card.Header>
              <Card.Body className="table-full-width">
                <Table className="table-bigboy">
                  <thead>
                    <tr>
                      <th className="text-center">Cedula</th>
                      <th className="text-center">Nombre y Apellido</th>
                      <th className="text-center">Manzana</th>
                      <th className="text-center">Villa</th>
                      <th className="text-center">Acciones</th>
                      {/* <th></th> */}
                    </tr>
                  </thead>
                  <tbody>
                    <Propietario />
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* modal */}
        <ModalPropietario setModal={setModal} modal={modal} />
        {/* fin del modal */}
      </Container>
    </div>
  ) : (<Register setregis={setregis} regis={regis} />)
  )
}
export default Propietarios;
