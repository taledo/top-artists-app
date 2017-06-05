import React from 'react';
import Pagination from 'react-js-pagination';
import { Alert } from 'react-bootstrap';
import TrackList from '../components/TrackList';


const config = {
  TRACKS_API_URL: 'http://localhost:3000/topTracks'
};

class TopTracks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tracks: [],
      error: false,
      showResults: false,
      errorMsg: '',
      activePage: 1,
      artist: '',
      totalPages: 1,
      tag: ''
    };

    this.handlePageChange = this.handlePageChange.bind(this);

  }

  componentDidMount() {
    this.setState({ tag: this.props.match.params.tag });
    this.getTopTracksData();
  }

  handlePageChange(pageNumber) {

    this.setState({activePage:  pageNumber });
    this.getTopTracksData(pageNumber);

  }

  getTopTracksData(pageNumber) {

    var apiURI = config.TRACKS_API_URL + '?tag=' + this.props.match.params.tag + '&page=' + pageNumber;

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
          errorMsg: d.message,
        })
      } else {

        this.setState({
            tracks: d.tracks.track,
            showResults: true,
            error: false,
            artist: d.tracks.track[0].artist.name,
            totalPages: parseInt( d['tracks']['@attr']['totalPages'], 10 )
          })
      }

      }, () => {
        this.setState({
          requestFailed: true
        })
      })
  }

  render() {

    var error,  results, pagination;

    if(this.state.showResults) {
        results =  <TrackList tracks={this.state.tracks} />
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
        <h2>Top Tracks for <b>{this.state.artist}</b></h2>
        <hr />
        
        <div>
        { error }
        { results }
        { pagination }
        </div>
      </div>
    )
  }
}



export default TopTracks;