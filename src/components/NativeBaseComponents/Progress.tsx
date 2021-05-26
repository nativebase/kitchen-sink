import React from "react";
import { Progress, Box } from "native-base";

export const Example = () => {
	return (
		<>
			{/* <Box bg="white"> */}
			<Progress value={45} mx={4} mt={4} bg="red.200" />
			{/* </Box> */}
		</>
	);
};
