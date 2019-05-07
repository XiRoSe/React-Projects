import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup } from 'react-bootstrap'
import Gallery from './Gallery';

class Global extends Component {
  constructor(props){
    super(props);
    this.state = {
      query: '',
      items: []
    }
  }

  //Search method sends a request to google-books-api and parshs them to items.
  search(){
    const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
    fetch(`${BASE_URL}${this.state.query}`,{method: 'GET'})
      .then(response => response.json())
      .then(json => {
        let { items } = json;
        this.setState({items});
      });
  }

  render() {
    return (
      <div className={"Global"}>
        <h2>Book Explorer!</h2>
        <InputGroup className="mb-3" >
          <FormControl
            placeholder="Search for a book"
            aria-describedby="basic-addon2"
            onChange={event => this.setState({query: event.target.value })}
            onKeyPress={event => {
              if (event.key === 'Enter'){
                this.search();
            }
            }}
          />
          <InputGroup.Append onClick={() => this.search()}>
            <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
        <Gallery items={this.state.items}/>
      </div>
    )
  }
}

export default Global;