import React, { Component } from 'react';
import Posts from '../components/Posts';
import axios from 'axios';
import { Link } from 'gatsby';

import './index.scss';

class IndexPage extends Component {

    state = {}
    componentDidMount(){
      
          axios.get('https://rickandmortyapi.com/api/character').then(res => {
          this.setState({
            characters: [...res.data.results],
            info: res.data.info
          });
          console.log(this.state.characters[0]);
          }).catch(err => console.log(err));
      }


    render() {

      const changePage = (dirn) => {
          
        const url = this.state.info[dirn]
          axios.get(url).then(res => {
          this.setState({
            characters: [...res.data.results],
            info: res.data.info
          });
          }).catch(err => console.log(err));
    }

    const updateFilter = (e) => {
      e.preventDefault();
      let status = 'status=';
      let gender = '&gender=';
      e.target.status.value === 'select' ? status = '' : status += e.target.status.value;
      e.target.gender.value === 'select' ? gender = '' : gender += e.target.gender.value;
      const url = 'https://rickandmortyapi.com/api/character/?'+ status + gender;
      axios.get(url).then(res => {
        this.setState({
          characters: [...res.data.results],
          info: res.data.info
        });
        }).catch(err => console.log(err));
    }

    const openChar = () => {

    }

    return (
      <>
        <div className="filter">
          <button onClick={()=>{changePage('prev')}}>PREV</button>
          <button onClick={()=>{changePage('next')}}>NEXT</button>
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
            <button type="submit">Apply</button>
          </form>
        </div>
        <div className="chars">
          {
            this.state.characters ?
            this.state.characters.map( char => {
              return (
                <Link to={`/character/${char.id}`}>
                  <Posts key={char.id} char={char}></Posts>
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