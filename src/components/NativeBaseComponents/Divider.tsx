import React from "react";
import { Divider, Text, VStack } from "native-base";

export const Example = () => {
	return (
		<VStack mt={3} w="100%" space={2}>
			<Text color="white">Text 1</Text>
			<Divider />
			<Text color="white">Text 2</Text>
		</VStack>
	);
};
