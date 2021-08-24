import React, {useState, useEffect} from 'react';
import {
    Badge,
    Button,
    Card,
    Modal,
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
import { getPlantillaxlsx, setPlantillaxlsx, getUsuario, setUsuarioCrear } from 'service/apiUsuario';
import { useToasts } from 'react-toast-notifications';

function Usuarios(props) {
  const [archivo, setxlsx] = useState([])
  const [modal, setModal] = useState(false)
  const [modalUsuario, setmodalUsuario] = useState(false)
  const [usuario, setusuario] = useState([])
  const [user, setuser] = useState({
    curso: '',
    nombre: '',
    apellido: '',
    password: '',
    usuario: '',
    perfil: ''
  })
  
  const { addToast } = useToasts();

  async function DescargarPlantilla() {
    const response = await getPlantillaxlsx()
    console.log(response);
  }

  async function EnviarArchivo() {
    if(archivo != null || archivo != undefined || archivo != ""){
      const response = await setPlantillaxlsx(archivo)
      if(response){
        setModal(!modal)
        addToast('Saved Successfully', { appearance: 'success', autoDismiss: 200 });
      }
    }
  }
  async function ListarUsuario() {
    const response = await getUsuario();
    setusuario(response)
  }
  function HandleChange(e) {
    setuser({
      ...user,
      [e.target.name] :e.target.value
    })
  }
  async function Guardarusuario() {
    const response = await setUsuarioCrear(user)
    if(response){
      ListarUsuario()
      setmodalUsuario(!modalUsuario)
      addToast('Saved Successfully', { appearance: 'success', autoDismiss: 200 });
    }
  }
  useEffect(() => {
    ListarUsuario()
  },[])
  
  return (
        <div>
         <Container>
            <Row>
          <Col md="12">
            <Card className="table-big-boy">
              <Card.Header>
                <Card.Title as="h4">Lista de Usuarios</Card.Title>
                <button className="btn m-3" onClick={()=>DescargarPlantilla()}>Descargar Plantilla de Usuarios</button>
                <button className="btn m-3" onClick={()=>setModal(!modal)}>Subir Plantilla de Usuarios</button>
                <button className="btn m-3" onClick={()=>setmodalUsuario(!modalUsuario)}>Crear un nuevo Usuarios</button>
              </Card.Header>
              <Card.Body className="table-full-width">
                <Table className="table-bigboy">
                  <thead>
                    <tr>
                      <th className="text-center">Curso</th>
                      <th className="text-center">Nombre</th>
                      <th className="text-center">Apellido</th>
                      <th className="text-center">Password</th>
                      <th className="text-center">Perfil</th>
                      <th className="text-center">Ultima Conexion</th>
                      <th className="text-center">Acciones</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                    usuario ?
                    usuario.map((iten, index)=>(
                    <tr>
                      <td className="text-center">
                      {iten.curso}
                      </td>
                      <td className="text-center"> {iten.nombre}  </td>
                      <td className="text-center">
                      {iten.apellido}
                      </td>
                      <td className="text-center">
                      {iten.password}
                      </td>
                      <td className="text-center">
                      {iten.perfil}
                      </td>
                      <td className="text-center">
                      {iten.ultimo_login ? iten.ultimo_login.split(".000Z",2) : '' }
                      </td>
                      <td className="text-center">
                        <OverlayTrigger
                          overlay={
                            <Tooltip id="tooltip-461494662">  Edit Post... </Tooltip>
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
                        <OverlayTrigger
                          overlay={
                            <Tooltip id="tooltip-408856985">
                              Remove Post..
                            </Tooltip>
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
                    )): ''
                  }
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
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
            <p className="text-center">Cargar Plantilla de Usuario</p>

              <Form.Group
                className="has-label has-success">
                <label>
                  Solo archivo xlsx <span className="star">*</span>
                </label>
                <input type="file" name="archivo" className="form-control" onChange={(e)=>setxlsx(e.target.files[0])} />
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
              onClick={() => EnviarArchivo()}
              variant="link"
            >
              Enviar
            </Button>
          </div>
        </Modal>
        {/* crear usuario  */}
        <Modal
          className="modal modal-primary"
          onHide={() => setmodalUsuario(!modalUsuario)}
          show={modalUsuario}
        >
          <Modal.Header className="justify-content-center">
            <div className="modal-profile">
              <i className="nc-icon nc-circle-09 icon-bold"></i>
            </div>
          </Modal.Header>
          <Modal.Body className="text-right">
            <p className="text-center">Crear Usuario</p>

              <Form.Group
                className="has-label has-success">
                <label>
                  Curso <span className="star">*</span>
                </label>
                <input type="text" name="curso" className="form-control" onChange={(e)=>HandleChange(e)} />
              </Form.Group>
              <Form.Group
                className="has-label has-success">
                <label>
                  Nombre <span className="star">*</span>
                </label>
                <input type="text" name="nombre" className="form-control" onChange={(e)=>HandleChange(e)} />
              </Form.Group>
              <Form.Group
                className="has-label has-success">
                <label>
                  Apellido<span className="star">*</span>
                </label>
                <input type="text" name="apellido" className="form-control" onChange={(e)=>HandleChange(e)} />
              </Form.Group>
              <Form.Group
                className="has-label has-success">
                <label>
                  Usuario<span className="star">*</span>
                </label>
                <input type="text" name="usuario" className="form-control" onChange={(e)=>HandleChange(e)} />
              </Form.Group>
              <Form.Group
                className="has-label has-success">
                <label>
                  Password <span className="star">*</span>
                </label>
                <input type="password" name="password" className="form-control" onChange={(e)=>HandleChange(e)} />
              </Form.Group>
              <Form.Group
                className="has-label has-success">
                <label>
                  Perfil <span className="star">*</span>
                </label>
                <input type="text" name="perfil" className="form-control" onChange={(e)=>HandleChange(e)} />
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
              onClick={() => Guardarusuario()}
              variant="link"
            >
              Enviar
            </Button>
          </div>
        </Modal>
      </div>
    );
}

export default Usuarios;