import React from "react";
import { Divider, Box, Text } from "native-base";

export const Example = () => {
	return (
		<Box mt={3} bg="black">
			<Text color="white">Text 1</Text>
			<Divider />
			<Text color="white">Text 2</Text>
		</Box>
	);
};
