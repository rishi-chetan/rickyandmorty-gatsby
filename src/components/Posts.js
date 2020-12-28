import React, { Component } from 'react';
import './posts.scss';
class posts extends Component {
    render() {
        return (
            <div className="character">
                <img src={this.props.char.image} alt={this.props.char.name} className="character__image" /> <br/>
                
                <p className="character__details">
                <span className="character__details character__details__special">ID:</span> {this.props.char.id}
                </p>
                
                <p className="character__details">
                <span className="character____details character__details__special">Name: </span> {this.props.char.name}
                </p>

                <p className="character__details">
                <span className="character____details character__details__special">Gender: </span> {this.props.char.gender}
                </p>
                
                <p className="character__details">
                <span className="character____details character__details__special">Status: </span> {this.props.char.status}
                </p>
            </div>
        );
    }
}

export default posts;
