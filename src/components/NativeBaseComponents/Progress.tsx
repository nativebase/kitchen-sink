import React from "react";
import { Progress, Text } from "native-base";

export const Example = () => {
	return (
		<>
			{/* <Text>This is a Simple Progress Bar</Text> */}
			<Progress value={45} mx={4} mt={4} />
		</>
	);
};
