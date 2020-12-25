import React, { Component } from 'react';
import { Link } from 'gatsby';
class character extends Component {

    state = {}

    componentDidMount() {
        console.log(this.props.pathContext.charId);
        const url = `https://rickandmortyapi.com/api/character/${this.props.pathContext.charId}`;
        fetch(url).then(res => res.json()).then(res => {
            console.log(res);
            this.setState({charData: res})
        })
    }
    render() {
        const btnStyle = {
            backgroundColor: 'white',
            textDecoration: 'none',
            border: '1px solid black',
            display: 'block',
            width: 'max-content',
            margin: '2rem auto',
            padding: '4px',
            fontWeight: '700'
        }
        return (
            <div>
                <Link to="/" style={btnStyle} >BACK</Link>
                {this.state.charData ? 
                    <>
                    <div className="character" style={{display: 'block', margin: 'auto'}} >
                    <img src={this.state.charData.image} alt="image"/>
                    <p><span className="character__id">Name: </span> {this.state.charData.name}</p>
                    <p><span className="character__id">Gender: </span> {this.state.charData.gender}</p>
                    <p><span className="character__id">Species: </span> {this.state.charData.species}</p>
                    <p><span className="character__id">Status: </span> {this.state.charData.status}</p>
                    <p><span className="character__id">Origin: </span> {this.state.charData.origin.name}</p>
                    </div>
                    </>
                      : ''}
            </div>
        );
    }
}

export default character;
