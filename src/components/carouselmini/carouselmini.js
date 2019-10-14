import React from 'react';
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import './carouselmini.scss';


class CarouselMini extends React.Component {
    render() {
        return (
            <div className="carouselMini">
                <Carousel>
                    <Carousel.Item>
                        <Link to="/renttools">
                        <img
                            className="carouselIMG"
                            src={this.props.IMG1}
                        /></Link>
                        <Link to="/renttools">
                        <img
                            className="carouselIMG"
                            src={this.props.IMG2}
                        /></Link>
                    </Carousel.Item>
                    <Carousel.Item>
                    <Link to="/renttools">
                        <img
                            className="carouselIMG"
                            src={this.props.IMG3}
                        /></Link>
                        <Link to="/renttools">
                        <img
                            className="carouselIMG"
                            src={this.props.IMG4}
                        /></Link>
                    </Carousel.Item>
                    <Carousel.Item>
                            <Link to="/renttools"><h4 className="CarouselViewAll">View All</h4></Link>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default CarouselMini;