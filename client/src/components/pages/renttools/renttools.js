import React from "react";
import './rentools.scss';
import Tools from './tools.json';
import ToolCard from '../../toolcard/toolcard';
import { Container, Row, Col, FormControl, InputGroup, Button } from 'react-bootstrap';
import SearchIcon from '../../images/searchIcon.svg';



export default class RentTools extends React.Component {
    constructor() {
        super();
        this.state = {
            tools: Tools,
            searchInput: "" ,
        }
    }

    //Functionality of Search Bar
    updateSearch(event) {
        //Allowing input up to 50 Characters
        this.setState({searchInput: event.target.value.substr(0, 50)});
    }
   
    
    render = () => {
        //Filtering state of Tools with state of Search
        let filterTools = this.state.tools.filter(
            (Tools) => {
                return Tools.name.toLowerCase().indexOf(this.state.searchInput.toLowerCase()) !== -1
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
                            value={this.state.searchInput} 
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
                    {filterTools.map((_Tools) =>
                    <Col key={_Tools.name} xs={6} md={4} lg={3} id="col">
                    <li className="tool">
                        <ToolCard
                        toolIMG={_Tools.img}
                        toolName={_Tools.name}
                        toolCategory={_Tools.category}
                        toolDeposit={_Tools.deposit}
                        toolFour_Hour={_Tools.four_hour}
                        toolDaily={_Tools.daily}
                        toolTwoDay={_Tools.daily * 2}
                        toolWeekly={_Tools.weekly}
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

