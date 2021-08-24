import React from 'react'

import {
    Badge,
    Button,
    Card,
    Form,
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

function Consultas () {
    return (
        <div>
         <Container>
            <Row>
          <Col md="12">
            <Card className="table-big-boy">
              <Card.Header>
                <Card.Title as="h4">Consultar</Card.Title>
                <p className="card-category">Detalle, ubicacion y referencia de la vivienda</p>
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
                      <th className="text-center">Tipo</th>
                      <th className="text-center">Acciones</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center"> 099999999999 </td>
                      <td className="text-center">la familia Peluche  </td>
                      <td className="text-center">MZ. 360 </td>
                      <td className="text-center">14</td>
                      <td className="text-center">Inquilino</td>
                      <td className="text-center">
                          <Button
                            className="btn-link btn-icon"
                            type="button"
                            variant="danger"
                          >
                           Ver
                          </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
        </div>
    );
}
export default Consultas;