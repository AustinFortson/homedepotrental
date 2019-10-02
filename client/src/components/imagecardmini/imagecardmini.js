import React from 'react';
import { Link } from "react-router-dom";
import './imagecardmini.scss';


class ImageCardMini extends React.Component {
  render () {
    return (
    <div className="imageCardMini">
        <Link to={this.props.link} className="miniCardLink">
            <img src={this.props.image} className="miniCardIMG"/>
        </Link>
        <br/>
        <Link to href={this.props.link} className="miniCardLink">{this.props.title}</Link>
    </div>
  );
}
}

export default ImageCardMini;