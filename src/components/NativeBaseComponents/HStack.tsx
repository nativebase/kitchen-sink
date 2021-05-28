import React from "react";
import { HStack, Box, Divider } from "native-base";

export function Example() {
	return (
		<HStack
			alignItems="center"
			mt={3}
			shadow={6}
			divider={<Divider />}
			space={2}
			bg="primary.600"
			px={2}
		>
			<Box rounded="md" _text={{ color: "white" }} shadow={3}>
				Box 1
			</Box>
			<Box rounded="md" _text={{ color: "white" }} shadow={3}>
				Box 2
			</Box>
		</HStack>
	);
}
