import React, { Component } from 'react';
import './posts.scss';
class posts extends Component {
    render() {
        return (
            <div className="character">
                <img src={this.props.char.image} alt="" /> <br/>
                
                <p>
                <span className="character__id">ID:</span> {this.props.char.id}
                </p>
                
                <p>
                <span className="character__id">Name: </span> {this.props.char.name}
                </p>

                <p>
                <span className="character__id">Gender: </span> {this.props.char.gender}
                </p>
                
                <p>
                <span className="character__id">Status: </span> {this.props.char.status}
                </p>
                
            </div>
        );
    }
}

export default posts;
