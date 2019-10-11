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
                <img src={Tools.img} className="cart-tool-img"/>
                <h3>{Tools.name}</h3>
                <h4>Deposit: ${Tools.deposit}</h4>
                <h5>Quantity: {Tools.quantity}</h5>
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