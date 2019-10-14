import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, FormControl, InputGroup, Button } from 'react-bootstrap';
import { removeItem, addQuantity, subtractQuantity} from '../../actions/cartactions';
import Recipe from './recipe.js';
import './cart.scss'

class Cart extends React.Component {

    //to remove the item completely
    handleRemove = (name)=>{
        this.props.removeItem(name);
    }
    //to add the quantity
    handleAddQuantity = (name)=>{
        this.props.addQuantity(name);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (name)=>{
        this.props.subtractQuantity(name);
    }

    render = () => {

        let addedTools = this.props.tools.length ?
        (
            this.props.tools.map(Tools=> {
        return (
                <div className="cart-tool" key={Tools.name}>
                    <Row>
                        <Col xs={6} md={4} lg={3}>
                            <img src={Tools.img} className="cart-tool-img"/>
                        </Col>
                        <Col xs={6} md={8} lg={9}>
                            <h3>{Tools.name}</h3>
                            <h4>Deposit: ${Tools.deposit}</h4>
                            <h5>Quantity: {Tools.quantity}<Link to= "/cart" id="addIcon" 
                                                             onClick={()=>{this.handleAddQuantity(Tools.name)}}>
                                                             +</Link>
                                                          <Link to= "/cart" id="subtractIcon"
                                                             onClick={()=>{this.handleSubtractQuantity(Tools.name)}}>
                                                             -</Link>
                            </h5>
                            <a id="removeIcon" onClick={()=>{this.handleRemove(Tools.name)}}>Remove</a>
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
                <Row id="collection">
                    <Col sm={12} md={6}>
                    <h5 className="cart-header">In your cart:</h5>
                    {addedTools}
                    </Col>
                    <Col>
                        <Recipe />
                    </Col>
                </Row>
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

const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)