import React, { Component } from 'react';
import Posts from '../components/Posts';
import axios from 'axios';
import { Link } from 'gatsby';

import './index.scss';

class IndexPage extends Component {

    state = {};
    getCharData(url,dirn) {
      if(dirn) {
        url = this.state.info[dirn];
      }
      axios.get(url).then(res => {
          this.setState({
            characters: [...res.data.results],
            info: res.data.info
          });
          }).catch(err => console.log(err));
    }
    componentDidMount(){
        this.getCharData('https://rickandmortyapi.com/api/character');
      }


    render() {
    const updateFilter = (e) => {
      e.preventDefault();
      let status = 'status=';
      let gender = '&gender=';
      e.target.status.value === 'select' ? status = '' : status += e.target.status.value;
      e.target.gender.value === 'select' ? gender = '' : gender += e.target.gender.value;
      const url = 'https://rickandmortyapi.com/api/character/?'+ status + gender;
      this.getCharData(url);
    }

    return (
      <>
        <div className="filter">
          <button onClick={()=>{this.getCharData('','prev')}} className="filter--button">PREV</button>
          <button onClick={()=>{this.getCharData('','next')}} className="filter--button">NEXT</button>
          <br/><br/>

          <form onSubmit={updateFilter} >
          
            <label htmlFor="status">Status: </label>
            <select name="status" id="status">
              <option value="select">select</option>
              <option value="alive">alive</option>
              <option value="dead">dead</option> 
              <option value="unknown">unknown</option>
            </select>&nbsp;
          
            <label htmlFor="gender">Gender: </label>
            <select name="gender" id="gender">
            <option value="select">select</option>
              <option value="male">male</option>
              <option value="female">female</option>
              <option value="genderless">genderless</option>
              <option value="unknown">unknown</option>
            </select>
          
            <button type="submit" className="filter--button">Apply</button>
          
          </form>
        </div>
        <div className="char-container">
          {
            this.state.characters ?
            this.state.characters.map( char => {
              return (
                <Link to={`/character/${char.id}`} key={char.id} className="char-container--single-character">
                  <Posts char={char}></Posts>
                </Link>
              )
            }):  <h1>loading.....</h1>
          }
        </div>
      </>
    );
  }
}

export default IndexPage;