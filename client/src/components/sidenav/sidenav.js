import React from 'react';
import { Container, FormControl, InputGroup, Button, Accordion, Card, Col, Row} from 'react-bootstrap';
import { Link } from "react-router-dom";
import SearchIcon from '../images/searchIcon.svg';
import './sidenav.scss';
import CarouselMini from '../carouselmini/carouselmini';
import chainsaw from '../images/chainsaw.jpg';
import concretesaw from '../images/concretesaw.jpg';
import tilesaw from '../images/tilesaw.jpg';
import cementmixer from '../images/cementmixer.jpg';
import smallcoredrill from '../images/smallcoredrill.jpg';
import probreaker from '../images/probreaker.jpg';
import rotohammer2 from '../images/rotohammer2.jpg';
import cordlessdrill from '../images/cordlessdrill.jpg';
import generator2000 from '../images/2000generator.jpg';
import invertergenerator from '../images/3000InverterGenerator.jpg';
import generator3000 from '../images/3000WattGenerator.jpg';
import generator6500 from '../images/6500wattgenerator.jpg';
import drainsnake25 from '../images/25drainsnake.jpg';
import drainsnake75 from '../images/75drainsnake.jpg';
import submersiblepump from '../images/submersiblepump.jpg';
import trashpump from '../images/trashpump.jpg';




export default function SideNav() {

    return (
        <div className="SideNav">
            {/*Search Bar*/}
            <InputGroup>
                <FormControl type="text" placeholder="Search Tools" />
                <InputGroup.Append>
                    <Button id="navbarButton"><img src={SearchIcon} /></Button>
                </InputGroup.Append>
            </InputGroup>

            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Cutting & Concrete
            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body> 
                        <CarouselMini
                        IMG1={chainsaw}
                        IMG2={tilesaw}
                        IMG3={cementmixer}
                        IMG4={concretesaw}
                        />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Drills & Hammers
            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                        <CarouselMini
                        IMG1={probreaker}
                        IMG2={smallcoredrill}
                        IMG3={cordlessdrill}
                        IMG4={rotohammer2}
                        />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                        Generators
            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                        <CarouselMini
                        IMG1={generator2000}
                        IMG2={invertergenerator}
                        IMG3={generator3000}
                        IMG4={generator6500}
                        />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="3">
                        Plumbing & Pumps
            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body>
                        <CarouselMini
                        IMG1={drainsnake25}
                        IMG2={drainsnake75}
                        IMG3={trashpump}
                        IMG4={submersiblepump}
                        />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="4">
                        Fastening & Welding
            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                        <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="5">
                        Compactors
            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="5">
                        <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="6">
                        Paining & Decorating
            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="6">
                        <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="7">
                        Lawn & Garden
            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="7">
                        <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="8">
                        Floor Care & Sanding
            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="8">
                        <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="9">
                        Other
            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="9">
                        <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="10">
                        Scaffolding
            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="10">
                        <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Link to = "/renttools">View All</Link>
                       </Card.Header>
                </Card>
            </Accordion>
        </div>
    )
}