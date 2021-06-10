import React from 'react';
import { ZStack, Box } from 'native-base';

export const Example = () => {
	return (
		<Box h="40" mx="auto">
			<ZStack mt={10} ml={-10}>
				<Box bg="primary.200" ml={-5} size={20} rounded="lg" />
				<Box bg="primary.300" mt={5} ml={0} size={20} rounded="lg" />
				<Box bg="primary.400" mt={10} ml={5} size={20} rounded="lg" />
			</ZStack>
		</Box>
	);
};
