import React from 'react';
import Item from './MovieDisplay';
import {Link} from 'react-router-dom';
import {Fade, Stagger} from 'react-animation-components';

const SearchResults = ({errorMsg, results}) => {

	if(errorMsg) {
		return(
			<div className="container d-flex vh-100 align-items-center justify-content-center">
				<div className="row">
					<h4>{errorMsg}</h4>
				</div>
			</div>
		)
	} 
	else {

 const movies = results.Search.map((movie, index) => {
		return(
			<div key={index} className="col-10 col-sm-4 col-md-2 m-4 h-100">
				<Stagger in>
					<Link to={{pathname: `/${movie.imdbID}`, state: {movie: movie} }}>
						<Fade in>
					 	<Item movie={movie}/>
					 </Fade>
					</Link>
				</Stagger>
			</div>
		)
	})

		return(
			<React.Fragment>
				<div className="row col-centered justify-content-center">
				 <div className="col ml-4">
		  	 <h5 className="results-count">
		  	 	{results.Search.length} results found
		  	 </h5>
		   </div>
				</div>
				<div className="row justify-content-center">
				 {movies}
				</div>
			</React.Fragment>
		)
	}
} 

export default SearchResults;