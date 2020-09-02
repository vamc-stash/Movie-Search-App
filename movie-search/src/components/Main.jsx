import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {search, fetchMovie} from '../redux/ActionCreators.js';
import Header from './Header';
import SearchBox from './SearchBox';
import Footer from './Footer';
import SearchResults from './SearchResults';
import MovieDetail from './MovieDetail';
import {Switch, Route, Redirect, withRouter, useParams} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

const mapStateToProps = state => ({
 searchResultsState: state.searchResults,
 fetchMovieState: state.fetchMovie 
})


const mapDispatchToProps = (dispatch) => ({
	search: (searchValue) => {dispatch(search(searchValue))},
	fetchMovie: (movieId) => {dispatch(fetchMovie(movieId))}
})

const MoviePage = (props) => {
 const {id} = useParams()

 useEffect(() => {
 	props.fetchMovie(id)
 }, [id])

	return(
	 <MovieDetail movie={props.fetchMovieState.movie}
	 	isLoading={props.fetchMovieState.isLoading}
			errorMsg={props.fetchMovieState.errorMsg}
		/>
	)
}

const Main = (props) => {

 const HomePage = () => {
 	return(
	 	<div className="row row-context align-items-center">
				<div className="col-12 col-sm-8 col-sm-offset-2 col-centered">
	 			<SearchBox search={props.search}/>
				</div>
				<div className="w-100"/>
				{!props.searchResultsState.isLoading && 
						<SearchResults results={props.searchResultsState.results}
							errorMsg={props.searchResultsState.errorMsg}
						/>
					}
			</div>
		)
 }

	return(
		<div className="container-fluid">
			<Header/>
			<TransitionGroup>
			 <CSSTransition key={props.location.key} classNames="page" timeout={600}>
			 	<Switch>
						<Route exact path="/" component={HomePage}/>
						<Route path="/:id"><MoviePage fetchMovie={props.fetchMovie} fetchMovieState={props.fetchMovieState}/></Route> 
						<Redirect to="/"/>
					</Switch>
			 </CSSTransition>
			</TransitionGroup>
			<Footer/>
		</div>
	)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));