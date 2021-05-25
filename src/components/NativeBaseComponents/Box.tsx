import React from "react";
import { Box } from "native-base";
export const Example = () => {
	return (
		<Box
			mt={3}
			// w="90%"
			bg="primary.400"
			py={4}
			px={2}
			_text={{ fontSize: "md", fontWeight: "bold", color: "white" }}
		>
			This is a Box
		</Box>
	);
};
