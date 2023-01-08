import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";

import "./App.css";

import AddMovie from "./components/AddMovie";

import ComponentFunction from "./insta/componentFunction";

function App() {
	let DUMMY_MOVIES = [
		{
			id: 1,
			title: "Some Dummy Movie",
			openingText: "This is the opening text of the movie",
			releaseDate: "2021-05-18",
		},
		{
			id: 2,
			title: "Some Dummy Movie 2",
			openingText: "This is the second opening text of the movie",
			releaseDate: "2021-05-19",
		},
	];

	const [myMovies, setMyMovies] = useState([]);
	// const [myMovies, setMyMovies] = useState(DUMMY_MOVIES);

	const [isLoading, setIsLoading] = useState(false);

	const [error, setError] = useState(null);

	const API_URL = "https://react-http-c51a6-default-rtdb.firebaseio.com/movies.json";

	const fetchMoviesHandler = useCallback(async () => {
		setError(null);
		setIsLoading(true);

		try {
			// const API_URL = "https://swapi.dev/api/films";

			const res = await fetch(API_URL);

			if (!res.ok) {
				throw new Error("Something went wrong");
			}

			const data = await res.json();

			const transformedMovies = data;

			// .results.map((movie) => {
			// 	return {
			// 		title: movie.title,
			// 		id: movie.episode_id,
			// 		releaseDate: movie.release_date,
			// 		openingText: movie.opening_crawl,
			// 	};
			// });

			setMyMovies(transformedMovies);
		} catch (err) {
			setError("something failed => " + err.message);
			// setError(err.message);
		}

		setIsLoading(false);
	}, []);

	const gotit = ComponentFunction(1, { arg: "1a" }, "1b");
	console.log("gotit :>> ", gotit);
	let content = "Found No Movies, try refreshing the list if any.";

	if (error) {
		content = error;
	} else if (isLoading) {
		content = "Loading your movies ...";
	} else {
		content = <MoviesList movies={myMovies} />;
	}

	useEffect(() => {
		fetchMoviesHandler();
	}, [fetchMoviesHandler]);

	const addMovieHandler = async function (movie) {
		console.log("Add movie : ", movie);

		const res = await fetch(API_URL, {
			method: "POST",

			body: JSON.stringify(movie),

			headers: {
				"Content-Type": "application/json",
			},
		});

		console.log("res :>> ", res);
		const data = await res.json();

		console.log("data :>> ", data);
		fetchMoviesHandler();
	};

	// const [boi, setBoi] = useState(0);

	// setTimeout(() => {
	// 	setBoi((prevBoi) => prevBoi + 1);
	// }, 2000);

	return (
		<React.Fragment>
			{/* <h1> {boi} </h1>
			<h1> {-boi} </h1> */}

			<ComponentFunction arg="2a" hello="2b" />

			<section>
				<AddMovie onAddMovie={addMovieHandler} />
			</section>

			<section>
				<button onClick={fetchMoviesHandler}>Fetch Movies</button>
			</section>

			<section>
				<h1>{content} </h1>
			</section>
		</React.Fragment>
	);
}

export default App;

/*
	M1.
	fetch(API_URL)
	.then((res) => {
		console.log("res :>> ", res);
		return res.json();
	})
	.then((data) => {
		// transformation code goes here
	})
	.catch((er) => console.log("er :>> ", er.message));
	M2. async await


	TODO 
	create 1 normalFunction, 1 ReactFunctionComp , 1 otherReactFunctionalComp , 
	// diff bw comp and reactComp is it returns jsx ... [naming is kinda good habit] 

	call using <thisWay {...args}>      OR 				thisWay(...args)


*/
