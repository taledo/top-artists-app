import React from 'react';
import { Table } from 'react-bootstrap';


class TrackList extends React.Component {

	render() {
	    var tracks = this.props.tracks.map(track =>
			<tr key={track.mbid}>
			    <td>{track.name}</td>
			    <td><a href={track.url} target='_blank' rel='noreferrer noopener'>Listen Now</a></td>
			  </tr>
	    );

	    return (
	    	<div>
				<Table striped bordered condensed hover>
					<tbody>
						{tracks}
					</tbody>
				</Table>
	        </div>
	    )
	}
}

export default TrackList;

