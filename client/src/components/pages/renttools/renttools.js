import React from "react";
import { connect } from 'react-redux';
import './rentools.scss';
import ToolCard from '../../toolcard/toolcard';
import { addToCart } from '../../actions/cartactions';
import { Container, Row, Col, FormControl, InputGroup, Button } from 'react-bootstrap';
import SearchIcon from '../../images/searchIcon.svg';

const mapStateToProps = (state)=>{
    return {
      tools: state.tools,
      searchInput: state.searchInput
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (name)=>{dispatch(addToCart(name))}
    }
}
  

class RentTools extends React.Component {

    // Functionality of Add to Cart Button
    handleClick = (name)=>{
        this.props.addToCart(name);
        console.log("Added to cart")
        }

    //Functionality of Search Bar
    updateSearch(event) {
        //Allowing input up to 50 Characters
        this.setState({searchInput: event.target.value.substr(0, 50)});
    }   
    
    render = () => {
        //Filtering state of Tools with state of Search
        let filterTools = this.props.tools.filter(
            (Tools) => {
                return Tools.name.toLowerCase().indexOf(this.props.searchInput.toLowerCase()) !== -1
            }
        )
        return (            
            <div>

                <Row id="tools-searchbar">
                    <Col xs={12} md={6} lg={4}>
                    <Container>
                        <InputGroup>
                            <FormControl 
                            type="text" 
                            id="toolSearch" 
                            placeholder="Search Tools"
                            value={this.props.searchInput} 
                            onChange={this.updateSearch.bind(this)}
                            />
                            <InputGroup.Append>
                                <Button id="navbarButton"><img src={SearchIcon} /></Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Container>
                    </Col>
                </Row>

                <Row id="tools-row">
                <ul className="tools">
                    {filterTools.map((Tool) =>
                    <Col key={Tool.name} xs={6} md={4} lg={3} id="col">
                    <li className="tool">
                        <ToolCard
                        toolIMG={Tool.img}
                        toolName={Tool.name}
                        toolCategory={Tool.category}
                        toolDeposit={Tool.deposit}
                        toolFour_Hour={Tool.four_hour}
                        toolDaily={Tool.daily}
                        toolTwoDay={Tool.daily * 2}
                        toolWeekly={Tool.weekly}
                        onClick={ ()=>{this.handleClick(Tool.name)} }
                        />
                    </li> 
                    </Col>                       
                    )}
                </ul>
                </Row>
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(RentTools)