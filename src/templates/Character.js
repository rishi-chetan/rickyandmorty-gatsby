import React, { Component } from 'react';
import { Link } from 'gatsby';
import '../components/posts.scss'
class character extends Component {
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
                {this.props.pageContext ? 
                    <>
                    <div className="character" style={{display: 'block', margin: 'auto'}} >

                    <img src={this.props.pageContext.image} alt={this.props.pageContext.name} className="character__image" />
                    
                    <p className="character__details"><span className="character__details character__details__special">Name: </span> {this.props.pageContext.name}</p>
                    
                    <p className="character__details"><span className="character__details character__details__special">Gender: </span> {this.props.pageContext.gender}</p>
                    
                    <p className="character__details"><span className="character__details character__details__special">Species: </span> {this.props.pageContext.species}</p>
                    
                    <p className="character__details"><span className="character__details character__details__special">Status: </span> {this.props.pageContext.status}</p>
                    
                    <p className="character__details"><span className="character__details character__details__special">Origin: </span> {this.props.pageContext.origin.name}</p>
                    </div>
                    </>
                    : 
                    <>
                        <center>loading...</center>
                    </>}
            </div>
        );
    }
}

export default character;
