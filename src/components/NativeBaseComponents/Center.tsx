// import React from "react";
// import { Center, Box } from "native-base";
// export function Example() {
// 	return (

// 			<Center
// 				bg="teal.300"
// 				h="200px"
// 				w="200px"
// 				_text={{ color: "white", fontWeight: "bold" }}
// 			>
// 				This is the Center
// 			</Center>
// 		</Box>
// 	);
// }

import React from "react";
import { Center } from "native-base";
export function Example() {
	return (
		<Center
			mt={3}
			shadow={6}
			bg="green.800"
			_text={{ color: "white", fontWeight: "bold" }}
			height={200}
			width={200}
		>
			This is the Center
		</Center>
	);
}
