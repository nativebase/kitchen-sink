import React from "react";
import { Divider, Box, Text } from "native-base";

export const Example = () => {
	return (
		<Box mt={3}>
			<Text>Text 1</Text>
			<Divider my={2} />
			<Text>Text 2</Text>
		</Box>
	);
};
