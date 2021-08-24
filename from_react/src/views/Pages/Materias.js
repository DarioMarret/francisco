import React, {useState, useEffect} from 'react';
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
    Collapse
  } from "react-bootstrap";
import { getMateria } from 'service/apiMateria';
  import { getusuario } from '../../service/apiLogin'

function Materias(props) {
  const [ multipleExpandablePanels,setMultipleExpandablePanels] = useState([]);
  const [collapsibleAccordion, setCollapsibleAccordion] =useState(-1);
  const toggleMultipleExpandablePanels = (event, value) => {
    if (multipleExpandablePanels.includes(value)) {
      setMultipleExpandablePanels(
        multipleExpandablePanels.filter((prop) => prop !== value)
      );
    } else {
      setMultipleExpandablePanels([...multipleExpandablePanels, value]);
    }
  };
  const [materias, setmaterias] = useState([])

  async function ListarMateria() {
    const response = await getMateria()
    if(response){
      setmaterias(response)
    }
  }
  useEffect(() => {
    ListarMateria()
  }, [])
    return (
      <div>
        <Container>
          <Row>
            { materias
              ? materias.map((iten, index) => (
                  <Col md="12">
                    <Card>
                      <Card.Header>
                        <Card.Title as="h4">
                          <a
                            data-toggle="collapse"
                            aria-expanded={multipleExpandablePanels.includes(index+1)}
                            href="#contabilidad"
                            onClick={(e) =>
                              toggleMultipleExpandablePanels(e, index+1)
                            }
                          >
                            {iten.materia} <b className="caret"></b>
                          </a>
                        </Card.Title>
                      </Card.Header>
                      <Collapse
                        className="card-collapse"
                        id="collapseOne"
                        in={multipleExpandablePanels.includes(index+1)}
                      >
                        <Card.Body>
                        <h2>{iten.titulo}</h2>
                          {iten.tag}
                          <a href={`${iten.link}`} target="_blank" rel="noopener noreferrer">Leer mas...</a>
                        </Card.Body>
                      </Collapse>
                    </Card>
                  </Col>
                ))
              : ""}
          </Row>
        </Container>
      </div>
    );
}

export default Materias;