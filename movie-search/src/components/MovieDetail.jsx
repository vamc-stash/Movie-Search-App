import React from 'react';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Image, Title, Year, Rating, TotalRating,  Info, Plot, SubTitle, SubTitleInfo} from './Styled';
import {Loading} from './Loader';

const MovieDetail = ({isLoading, errorMsg, movie}) => {

	if(isLoading) {
		return(
		 <div className="container d-flex vh-100 align-items-center justify-content-center">
				<div className="row text-white ">
					<Loading/>
				</div>
			</div>
		)
	} 
	else if(errorMsg) {
		return(
			<div className="container d-flex vh-100 align-items-center justify-content-center">
				<div className="row">
					<h4>{errorMsg}</h4>
				</div>
			</div>
		)
	} 
	else {

	 return(
		 <React.Fragment>
			 <div className="row breadcrumb-row text-white">
			 	<div className="col">
      <Breadcrumb className="breadcrumb">
       <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
       <BreadcrumbItem active>{movie.Title}</BreadcrumbItem>
      </Breadcrumb>
			 	</div>
			 </div>
				<div className="container">
					<div className="row movie-row-context align-items-center text-white">
						<div className="col-12 col-sm-4 mt-2 justify-content-center">
							<div className="img-responsive shadow-lg">
		      <a href={movie.Poster} target="_blank" rel="noopener noreferrer">
		       <Image src={movie.Poster} alt={movie.Title}/>
		      </a>
	    	</div>
	    </div>
					<div className="col-12 col-sm mt-2 justify-content-center">
						<div className="row">
							<div className="col-8">
								<p>
									<Title>{movie.Title}</Title>
									<Year>  ({movie.Year})</Year>
								</p>
							</div>
							<div className="col-offset-3 col">
								<Rating>{movie.imdbRating}</Rating>
								<TotalRating>/10</TotalRating>
							</div>
						</div>
						<div className="row">
							<div className="col">
								<Info>
								 <span>{movie.Rated} | </span>
								 <span> {movie.Runtime} | </span>
								 <span> {movie.Released}({movie.Country})</span>
								</Info>
							</div>
							<div className="w-100"/>
							<div className="col">
							 <Info>
								 <span>{movie.Language} | </span>
								 <span> {movie.Genre}</span>
								</Info>
							</div>
						</div>
	     <div className="row">
	     	<div className="col">
	     		<Plot>{movie.Plot}</Plot>
	     	</div>
	     	<div className="w-100"/>
	     	<div className="col">
	   				<p>
	   					<SubTitle>Director: </SubTitle>
	   					<SubTitleInfo>{movie.Director}</SubTitleInfo>
	   				</p>
	     	</div>
	     	<div className="w-100"/>
	     	<div className="col">
	     		<p>
	     			<SubTitle>Writers: </SubTitle>
	     			<SubTitleInfo>{movie.Writer}</SubTitleInfo>
	     		</p>
	     	</div>
	     	<div className="w-100"/>
	     	<div className="col">
	     		<p>
	     			<SubTitle>Actors: </SubTitle>
	     			<SubTitleInfo>{movie.Actors}</SubTitleInfo>
	     		</p>
	     	</div>
	     	<div className="w-100"/>
	     	<div className="col">
	     		<p>
	     			<SubTitle>Production: </SubTitle>
	     			<SubTitleInfo>{movie.Production}</SubTitleInfo>
	     		</p>
	     	</div>
	     	<div className="w-100"/>
	     	<div className="col">
	     		<p>
	     			<SubTitle>Awards: </SubTitle>
	     			<SubTitleInfo>{movie.Awards}</SubTitleInfo>
	     		</p>
	     	</div>
	     </div>		
					</div>
		 	</div>
		 </div>
		</React.Fragment>
		)
	}
}

export default MovieDetail;