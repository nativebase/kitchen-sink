import React from "react";
import { Progress, Box } from "native-base";

export const Example = () => {
	return (
		<>
			<Box w="100%" h="30" mt={4}>
				<Progress value={45} mx={4} bg="white" />
			</Box>
		</>
	);
};
