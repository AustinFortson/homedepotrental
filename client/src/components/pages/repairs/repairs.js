import React from "react";
import './repairs.scss';
import { Container, Row, Col, Jumbotron, Button, Card } from 'react-bootstrap';
import repairIMG from '../../images/repairIMG.jpg';
import serviceWarranty from '../../images/serviceWarranty.gif'


export default function repairs() {

    return (
        <div>
            <Row id="repairHeader">
                <Col xs={12} lg={4} id="repairHeaderText">
                    <h1>FIX YOUR TOOLS</h1>
                    <h4>Our expert technicians repair handheld power tools and outdoor equipment purchased from any store</h4>
                </Col>
                <Col xs={12} lg={8}>
                    <img src={repairIMG} id="repairIMG" />
                </Col>
                <img src={serviceWarranty} id="serviceWarrantyIMG"/>     
            </Row>

            <Row id="repairContent">
                <Col xs={6} lg={3} id="repairDetails">
                    <Row><h3 className="detailsHeader">Diagnosis Fee</h3></Row>
                    <Row><p>A fee of $18.95* will be collected upfront for ALL repairs and applied to total repair cost. If the warranty covers the repair the deposit will be refunded upon pickup.</p></Row>
                </Col>

                <Col xs={6} lg={3} id="repairDetails">
                    <Row><h3 className="detailsHeader">Repair Approval</h3></Row>
                    <Row><p>Our tool techs will contact for approval on repairs costing more than $100.
                    </p></Row>
                </Col>
                
                <Col xs={6} lg={3} id="repairDetails">
                    <Row><h3 className="detailsHeader">Warranty Service</h3></Row>
                    <Row><p>For tools under manufacturer warranties, we verify the warranty, complete the repair, and file a claim at no cost to you**
                    </p></Row>
                </Col>

                <Col xs={6} lg={3} id="repairDetails">
                    <Row><h3 className="detailsHeader">Average Repair Time</h3></Row>
                    <Row><p>Repairs typically take 2 - 3 weeks to complete. Repairs completed offsite typically take 4 to 6 weeks.
                    </p></Row>
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <table className="RepairList">
                        <tr>
                            <th>Do Repair</th>
                            <th>Do NOT Repair</th>
                        </tr>
                        <tr>
                            <td>Push Mowers</td>
                            <td>Radios</td>
                        </tr>
                        <tr>
                            <td>String Trimmers</td>
                            <td>Wet/Dry Vacuums</td>
                        </tr>
                        <tr>
                            <td>Blowers</td>
                            <td>Plumbing Tools</td>
                        </tr>
                        <tr>
                            <td>Hedge Trimmers</td>
                            <td>Flashlights</td>
                        </tr>
                        <tr>
                            <td>Gas Pressure Washers</td>
                            <td>Electric Pressure Washers</td>
                        </tr>
                        <tr>
                            <td>Chainsaws</td>
                            <td>Garage Door Openers</td>
                        </tr>
                        <tr>
                            <td>Generators</td>
                            <td>Laser Levels</td>
                        </tr>
                        <tr>
                            <td>Drills</td>
                            <td>Batteries & Chargers</td>
                        </tr>
                        <tr>
                            <td>Nailers</td>
                            <td>Bluetooth-enabled tools</td>
                        </tr>
                    </table>
                </Col>
            </Row>

            <Row>
                <Col xs={12} md={6} id="bottomContent">
                    <h3>Common Repairs NOT Covered Under Warranty</h3>
                    <p>Damage caused by stale fuel or improper fuel mix</p>  
                    <p>Parts that fail due to wear and tear (blades, spark plugs, belts, brushes, valves, etc.)</p> 
                    <p>Damage caused by improper lubrication</p>
                    <p>Tools broken due to abuse or neglect of repair</p>                  
                </Col>
                <Col xs={12} md={6} id="bottomContent">
                    <h3>Purchased HD Protection Plan?</h3>
                    <p>Please visit <a href="https://www.homedepot.com/protect" target="_blank" id="HomeDepotLink">www.homedepot.com/protect</a> to easily file and track a claim. You may also call <a id="HomeDepotLink">1-844-529-2701</a>, 24 hours a day, 7 days a week to file a claim.</p>
                </Col>
            </Row>



        </div>
    )
}

