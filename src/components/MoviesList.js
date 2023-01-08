import React from "react";

import Movie from "./Movie";
import classes from "./MoviesList.module.css";

const MovieList = (props) => {
	console.log("props.movies :>> ", props.movies);
	debugger;
	return (
		<ul className={classes["movies-list"]}>
			{Object.entries(props.movies).map(([key, movie]) => (
				<Movie key={key} title={movie.title} releaseDate={movie.releaseDate} openingText={movie.openingText} />
			))}
		</ul>
	);
};

export default MovieList;
