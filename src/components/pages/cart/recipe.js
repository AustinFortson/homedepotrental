import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Form, FormControl, InputGroup, Button } from 'react-bootstrap';
import CheckoutForm from '../../checkoutform/checkoutform.js';
class Recipe extends React.Component{

    render(){
        
        return(
            <div className="cart-total">
                <Container id="cart-total-header">
                <h3 className="total-price">Total Deposit: ${this.props.total}</h3>  
                </Container>

                <CheckoutForm/>

                 </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedTools: state.addedTools,
        total: state.total
    }
}


export default connect(mapStateToProps)(Recipe)