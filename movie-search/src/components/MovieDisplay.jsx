import React from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';
import {FadeTransform} from 'react-animation-components';


const Item = ({movie}) => {
	return(
		<FadeTransform in
			transformProps={{
				exitTransform: 'scale(0.5) translateY(-50%)'
			}}>
			<Card className="w-80 movie-card"> 
				<CardImg className="w-100 h-100 movie-poster" src={movie.Poster} alt={movie.Title}/>
				<CardImgOverlay className="movie-quick-detail">
					<CardTitle className="movie-title">{movie.Title}  <span>({movie.Year})</span></CardTitle>
				</CardImgOverlay>
			</Card>
		</FadeTransform>
	)
}

export default Item;