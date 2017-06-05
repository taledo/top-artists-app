import React, { Component } from 'react';
import Pagination from 'react-js-pagination';
import { Button,FormControl,Alert,Navbar } from 'react-bootstrap';
import ArtistList from '../components/ArtistList';

const config = {
  ARTISTS_API_URL: 'http://localhost:3000/topArtists'
};

class TopArtists extends Component {

  constructor(props) {
    super(props);
    this.state = {
      artists: [],
      activePage: 1,
      totalPages: 1,
      value: '',
      showResults: false,
      error: false,
      errorMsg: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);

  }

  getTopArtistData(pageNumber) {

    var apiURI = config.ARTISTS_API_URL + '?page=' + pageNumber;

    if(typeof this.state.value!=='undefined') {
      apiURI += '&country=' + this.state.value
    }

    fetch(apiURI)
    .then(response => {
        if (!response.ok) {
          throw Error('Network request failed')
        }
        return response
      })
    .then(d => d.json())
    .then(d => {

    	if(d.error) {
    		this.setState({
    			error: true,
    			errorMsg: d.message
    		})
    	} else {

    		this.setState({
	          artists: d.topartists.artist,
	          showResults: true,
	          error: false,
	          totalPages: parseInt( d['topartists']['@attr']['totalPages'], 10 )
	        })
    	}

      }, () => {
        this.setState({
          requestFailed: true
        })
      })
  }


  handlePageChange(pageNumber) {
    this.setState({activePage:  pageNumber });
    this.getTopArtistData(pageNumber);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.getTopArtistData();
  }


  render() {

  	var error,	results, pagination;

  	if(this.state.showResults) {
        results = <ArtistList artists={this.state.artists}/>
        pagination = <Pagination 
	        activePage={this.state.activePage} 
	        itemsCountPerPage={5} 
	        totalItemsCount={this.state.totalPages} 
	        pageRangeDisplayed={5}
	        onChange={this.handlePageChange}
        />
    }

    

    if(this.state.error) {
    	error = <Alert bsStyle='danger'>An error occured: <b>{this.state.errorMsg}</b></Alert>
    }
  	

    return (        
    	<div>

        <h2>Top Artists</h2>
        <p>Enter a country and hit Search.</p>
        <hr />

        <Navbar.Form>
          <form onSubmit={this.handleSubmit}>
            <FormControl
            type='text'
            value={this.state.value}
            placeholder='Enter Country'
            onChange={this.handleChange}
            />
            <Button type='submit'>Search</Button>
          </form>
        </Navbar.Form>

        <div>
          { error }
          { results }
          { pagination }
        </div>
  		</div>
    )
  }
}



export default TopArtists;