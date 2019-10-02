import React from 'react';
import './home.scss';
import SideNav from '../../sidenav/sidenav';
import indoorRentals from '../../images/indoorRentals.jpg';
import outdoorRentals from '../../images/outdoorRentals.jpg';
import carpetblower from '../../images/carpetblower.jpg';
import carpetcleaner from '../../images/carpetcleaner.png';
import wetdryvacuum from '../../images/wetdryvacuum.jpg';
import floormaintainer from '../../images/floormaintainer.jpg';
import aerator from '../../images/aerator.jpg';
import chainsaw from '../../images/chainsaw.jpg';
import pressurewasher from '../../images/pressurewasher.jpg';
import tiller from '../../images/tiller.jpg';
import ImageCardMini from '../../imagecardmini/imagecardmini';
import { Container, Row, Col } from 'react-bootstrap';


function Home() {
  return (
    <div className="App">
    
      <Row>
        <Col xs={12} md={6} lg={4} xl={3} id="left-Col">
          <SideNav />
        </Col>

        <Col xs={12} md={6} lg={8} xl={9} id="right-Col">
          {/*Indoor Rentals*/}
        <Container>
          <Row>
              <img src={indoorRentals} id="RentalsIMG"/>                 
          </Row>
          {/*Indoor Rental Image Cards*/}
          <Row>
            <Col xs={6} lg={3}>
              <ImageCardMini
              link="#"
              image={carpetcleaner}
              title="Carpet Cleaner"
              />
            </Col>
            <Col xs={6} lg={3}>
            <ImageCardMini
              link="#"
              image={carpetblower}
              title="Carpet Blower"
              />
              </Col>
              <Col xs={6} lg={3}>
              <ImageCardMini
              link="#"
              image={floormaintainer}
              title="Floor Maintainer"
              />
              </Col>
              <Col xs={6} lg={3}>
              <ImageCardMini
              link="#"
              image={wetdryvacuum}
              title="Wet/Dry Vac"
              />
              </Col>
          </Row>
          </Container>

          {/*Outdoor Rentals*/}
          <Container>
          <Row>
              <img src={outdoorRentals} id="RentalsIMG"/>                 
          </Row>
          {/*Outdoor Rental Image Cards*/}
          <Row>
            <Col xs={6} lg={3}>
              <ImageCardMini
              link="#"
              image={aerator}
              title="Aerator"
              />
            </Col>
            <Col xs={6} lg={3}>
            <ImageCardMini
              link="#"
              image={tiller}
              title="Tiller"
              />
              </Col>
              <Col xs={6} lg={3}>
              <ImageCardMini
              link="#"
              image={chainsaw}
              title="Chainsaw"
              />
              </Col>
              <Col xs={6} lg={3}>
              <ImageCardMini
              link="#"
              image={pressurewasher}
              title="Pressure Washer"
              />
              </Col>
          </Row>
          </Container>
        </Col>
      </Row>






    </div>
  );
}

export default Home;
