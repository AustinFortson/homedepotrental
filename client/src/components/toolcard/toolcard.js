import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import './toolcard.scss';

export default class ToolCard extends React.Component {

	render = () => {
		return (
            <Container>
                <Row>
                    <img src={this.props.toolIMG} className="tool-image" />
                </Row>
                <Row>
                    <h5 className="tool-name">{this.props.toolName}</h5>
                </Row>
                <Row>
                    <p className="tool-category">Category: {this.props.toolCategory}</p>
                </Row>
                <Row>
                    <p>Deposit: ${this.props.toolDeposit}</p>
                </Row>
                <Row id="tool-prices">
                    <h5>4 Hours: ${this.props.toolFour_Hour}</h5>
                    <h5>1 Day: ${this.props.toolDaily}</h5>
                    <h5>2 Day: ${this.props.toolTwoDay}</h5>
                    <h5>Weekly: ${this.props.toolWeekly}</h5>
                </Row>
                <Button variant="dark" onClick={this.props.onClick}>Add To Rental</Button>
            </Container>
		);
	}
}