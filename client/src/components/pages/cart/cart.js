import React from "react";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Form, FormControl, InputGroup, Button } from 'react-bootstrap';
import './cart.scss'

class Cart extends React.Component {

    render = () => {

        let addedTools = this.props.tools.length ?
        (
            this.props.tools.map(Tools=> {
        return (
                <div className="cart-tool">
                    <Row>
                        <Col xs={6} md={4} lg={3}>
                            <img src={Tools.img} className="cart-tool-img"/>
                        </Col>
                        <Col xs={6} md={8} lg={9}>
                            <h3>{Tools.name}</h3>
                            <h4>Deposit: ${Tools.deposit}</h4>
                            <h5>Quantity: {Tools.quantity}<a id="addIcon">+</a><a id="subtractIcon">-</a></h5>
                            <a>Remove</a>
                        </Col>
                    </Row>
                    <Row id="cart-prices">
                        <Col xs={3}>
                         <p>4 Hours: ${Tools.four_hour}</p>    
                        </Col>
                        <Col xs={3}>
                         <p>24 Hours: ${Tools.daily}</p>    
                        </Col>
                        <Col xs={3}>
                         <p>48 Hours: ${Tools.daily * 2}</p>    
                        </Col>
                        <Col xs={3}>
                         <p>Week: ${Tools.weekly}</p>    
                        </Col>
                    </Row>
                </div>
        );
        })
    ):

    (<h4 className="cart-header">You have not added any rentals to your cart. Click <Link to = "/renttools" id="orange-link">here</Link> to view all tool rentals.</h4>)

    return(
        <div>
            <div className="cart">
                <ul className="collection">
                    <Col sm={12} md={6}>
                    <h5 className="cart-header">In your cart:</h5>
                    {addedTools}
                    </Col>
                </ul>
            </div>
        </div>
   )
    }
}

const mapStateToProps = (state)=>{
    return{
        tools: state.addedTools
    }
}

export default connect(mapStateToProps)(Cart)