import React from "react";

import normalFunction from "./normalFunction";

const ComponentFunction = (x, ele) => {
	console.log("DEBUGG I am componentFunction : ", x, ele);

	normalFunction(ele);

	return (
		<div>
			componentFunction + {x.arg} + {x.hello}
		</div>
	);
};

export default ComponentFunction;
