import { useState } from "react";

const useFunction = (el) => {
	const [got, setGot] = useState(true);

	console.log("got", got);

	if (got) {
		setGot(!got);
	}
	// console.log("I am normalFunction : ", el);
};

export default useFunction;
