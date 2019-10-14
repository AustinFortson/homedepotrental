import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, FormControl, Table, Button } from 'react-bootstrap';
import { addToCart } from '../../actions/cartactions';
import './viewtool.scss'

const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (name)=>{dispatch(addToCart(name))}
    }
}

class ViewTool extends React.Component {
        // Functionality of Add to Cart Button
        handleClick = (name)=>{
            this.props.addToCart(name);
            console.log("Added to cart")
            }

    render = () => {

        let showTool = this.props.tools ?
        (
            this.props.tools.map((Tool)=> {
        return (
                <div id="single-tool" key={Tool.name}>
                                <div classname="breadCrumbs">
                <Link to ="/renttools" id="single-tool-breadCrumbs">Back</Link> / {Tool.name}
            </div>
                        <h1 className="single-tool-name">{Tool.name}</h1>
                        <p className="single-tool-category">{Tool.category}</p>
                    <Row>
                        <Col xs={12} md={6}>
                            <img src={Tool.img} className="single-tool-img"/>
                        </Col>
                        <Col xs={12} md={6}>
                            <Table id="single-tool-prices">
                                <thead>
                                    <tr>
                                        <th>4 Hours</th>
                                        <th>1 Day</th>
                                        <th>2 Days</th>
                                        <th>Weekly</th>
                                    </tr>    
                                    <tr>
                                        <td>${Tool.four_hour}</td>
                                        <td>${Tool.daily}</td>
                                        <td>${Tool.daily * 2}</td>
                                        <td>${Tool.weekly}</td>
                                    </tr>
                                    <tr>
                                        <th colSpan={4}><Button id="single-tool-button" onClick={ ()=>{this.handleClick(Tool.name)}}>Add To Rental</Button></th>
                                   </tr>                             
                                </thead>                                
                            </Table>                        
                        </Col>
                    </Row>
                </div>
        );
        })
    ):

    (<p id="noMatchHeader"> 404 Not Found </p>)

    return(
        <div>
            {showTool}
        </div>
   )
    }
}

const mapStateToProps = (state)=>{
    return{
        tools: state.showTool
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewTool)