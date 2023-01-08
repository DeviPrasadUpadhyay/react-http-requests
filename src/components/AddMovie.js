import React, { useRef } from "react";
import classes from "./AddMovie.module.css";
const AddMovie = (props) => {
	const titleRef = useRef();
	const releaseDateRef = useRef();
	const openingTextRef = useRef();

	const formSubmitHandler = (event) => {
		event.preventDefault();
		console.log("event ", event);
		// could add validation here
		const movie = {
			title: titleRef.current.value,
			releaseDate: releaseDateRef.current.value,
			openingText: openingTextRef.current.value,
		};
		props.onAddMovie(movie);
	};
	return (
		<form action="" onSubmit={formSubmitHandler}>
			<div className={classes.control}>
				<label htmlFor="title"> Title </label>
				<input type="text" id="title" ref={titleRef} />
			</div>
			<div className={classes.control}>
				<label htmlFor="openingText"> Opening Text </label>
				<textarea rows="5" id="openingText" ref={openingTextRef} />
			</div>
			<div className={classes.control}>
				<label htmlFor="releaseDate"> Release Date </label>
				<input type="date" id="releaseDate" ref={releaseDateRef} />
			</div>
			<button> Add Movie </button>
		</form>
	);
};

export default AddMovie;
