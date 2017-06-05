import React from 'react';
import { Table } from 'react-bootstrap';
import { convertStringToTag } from '../helpers/index';
import { Link } from 'react-router-dom';


class ArtistList extends React.Component {

	render() {	

	    var artists = this.props.artists.map(artist =>
			<tr key={artist.mbid}>
			  	<td>
			  		<Link to={'/tracks/'+ convertStringToTag(artist.name) }>
			  			<img src={ artist.image[1]['#text']} alt={artist.name} />
			  		</Link>
			  	</td>
			    <td>{artist.name}</td>
			  </tr>
	    );

	    return (
	    	<div>
				<Table striped bordered condensed hover>
					<tbody>
						{artists}
					</tbody>
				</Table>
	        </div>
	    )
	}
}

export default ArtistList;