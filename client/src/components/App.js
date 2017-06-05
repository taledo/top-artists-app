import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TopArtists from '../containers/top-artists';
import TopTracks from '../containers/top-tracks';
import '../App.css';

class App extends Component {
	
	render() {
		return (
		 <BrowserRouter>
	        <Switch>
	            <Route exact path="/" component={TopArtists} />
	            <Route path='/tracks/:tag' component={TopTracks}/>
	        </Switch>
	    </BrowserRouter>
	    )
	}
}

export default App;
