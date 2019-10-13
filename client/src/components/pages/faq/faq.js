import React from "react";
import { Container, Row, Col, Form, FormControl, InputGroup, Button } from 'react-bootstrap';
import './faq.scss'


export default function FAQ () {

        return (
            <div className="faq-section">
                <Row>
                    <Container>
                        <Col sm={12}>
                            <h1 className="faq-title">Tool Rental FAQ's</h1>
                        </Col>
                    </Container>
                </Row>
                <Row>
                    <Container>
                        <Col xs={12}><h4 className="faq-header">What happens if a tool breaks down while I'm using it?</h4></Col>
                            <Col xs={12}>
                                <p className="faq-description">Damage protection is an optional service offered by The Home Depot that relieves Customer of repair or replacement charges if the Equipment is damaged during normal use during the Rental Period. The charge for Damage Protection is 15% of the Rental Price and will appear as a separate line item charge on the Agreement and on the invoice. Customer must accept or decline the Damage Protection service at the time of rental. Damage Protection is not insurance. Damage Protection does not cover loss of or damage to the Equipment caused by theft, abuse, misuse, neglect, intentional acts and/or failure to follow proper use and care instructions provided for the Equipment. Customer expressly acknowledges and agrees that Customer shall be responsible for all repair or replacement costs not covered by Damage Protection.
                                </p>
                            </Col>
                    </Container>
                </Row>
                <Row>
                    <Container>
                        <Col xs={12}><h4 className="faq-header">What are your hours of operation?</h4></Col>
                            <Col xs={12}>
                                <p className="faq-description">Our Tool Rental Centers’ hours of operation match the store in which they are located and are also open 7 days a week. Please check your local store for actual hours of operation.
                                </p>
                            </Col>
                    </Container>
                </Row>
                <Row>
                    <Container>
                        <Col xs={12}><h4 className="faq-header">What types of tools can I rent?</h4></Col>
                            <Col xs={12}>
                                <p className="faq-description">We rent a variety of professional-quality tools ranging from smaller hand-tools to larger machinery, such as trenchers.
                                </p>
                            </Col>
                    </Container>
                </Row>
                <Row>
                    <Container>
                        <Col xs={12}><h4 className="faq-header">How much does it cost to rent a tool?</h4></Col>
                            <Col xs={12}>
                                <p className="faq-description">We offer competitive prices that vary based on the type of tool. Please check the website or contact your local store for details.
                                </p>
                            </Col>
                    </Container>
                </Row>
                <Row>
                    <Container>
                        <Col xs={12}><h4 className="faq-header">Why should I rent from The Home Depot?</h4></Col>
                            <Col xs={12}>
                                <p className="faq-description">We allow you to rent the tools, so you can own the project. We offer a large assortment of reliable tools, have over 1000 locations for your convenience, and save you from the cost and hassle of tool maintenance and storage
                                </p>
                            </Col>
                    </Container>
                </Row>
                <Row>
                    <Container>
                        <Col xs={12}><h4 className="faq-header">How can I get a tool delivered to my house?</h4></Col>
                            <Col xs={12}>
                                <p className="faq-description">Most of the tools will fit in your car or truck. We also offer trailers or Load N’ Go trucks to rent for your convenience.
                                </p>
                            </Col>
                    </Container>
                </Row>
                <Row>
                    <Container>
                        <Col xs={12}><h4 className="faq-header">How long can I rent a tool?</h4></Col>
                            <Col xs={12}>
                                <p className="faq-description">You can rent on your terms. We offer 4-hour, daily, weekly, and monthly rentals.
                                </p>
                            </Col>
                    </Container>
                </Row>
                <Row>
                    <Container>
                        <Col xs={12}><h4 className="faq-header">What happens if a tool does not work?</h4></Col>
                            <Col xs={12}>
                                <p className="faq-description">Our associates will ensure the tool works properly before you leave the store. If you experience issues with the tool while completing your project, simply bring it back to the Tool Rental Center to get a replacement. If you purchase Damage Protection at the time of your rental, you are not responsible for repair costs for tools that break due to normal use.
                                </p>
                            </Col>
                    </Container>
                </Row>
                <Row>
                    <Container>
                        <Col xs={12}><h4 className="faq-header">Can I make a reservation for a tool?</h4></Col>
                            <Col xs={12}>
                                <p className="faq-description">Tool and equipment rentals are on a “first come, first serve” basis, so there are no advanced reservations available. Please call your local store or browse homedepot.com/rentals to check tool availability prior to visiting the store.
                                </p>
                            </Col>
                    </Container>
                </Row>
                <Row>
                    <Container>
                        <Col xs={12}><h4 className="faq-header">What do I need to bring in order to rent a tool?</h4></Col>
                            <Col xs={12}>
                                <p className="faq-description">You will need a government-issued photo ID such as a driver’s license or passport, as well as a valid credit card for the deposit. No debit cards or gift cards will be accepted at the time of rental; however debit cards are accepted for the rental fees upon return of the tool
                                </p>
                            </Col>
                    </Container>
                </Row>
            </div>
        );

}

