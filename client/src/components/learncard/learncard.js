import React from 'react';
import { Link } from "react-router-dom";
import ModalVideo from 'react-modal-video';
import { Col, Card } from 'react-bootstrap';
import './learncard.scss';


class LearnCard extends React.Component {

    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
      }
     
      openModal () {
        this.setState({isOpen: true})
      }
    
    render() {
        return (
        <React.Fragment>

        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.props.videoId} onClose={() => this.setState({isOpen: false})} />

        <Col xs={12} lg={6}>
            <Card id="learnCard">
            <img src={this.props.learnIMG} onClick={this.openModal} className="learn-card-img"/>
            <h3 onClick={this.openModal} className="learn-card-title">{this.props.learnTitle}</h3>
            </Card>
        </Col>
        </React.Fragment>
        );
    }
}

export default LearnCard;