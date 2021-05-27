import React from "react";
import { ZStack, Box } from "native-base";

export const Example = () => {
	return (
		<ZStack h="150px" mt={4}>
			<Box bg="primary.400" size={20} rounded="lg" shadow={3} />
			<Box bg="secondary.400" mt={5} size={20} rounded="lg" shadow={5} />
			<Box bg="emerald.400" mt={10} size={20} rounded="lg" shadow={7} />
		</ZStack>
	);
};
