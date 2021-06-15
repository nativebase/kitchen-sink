import React from 'react';
import { Divider, Box, VStack, HStack } from 'native-base';

export const Example = () => {
	return (
		<HStack h={10} w="70%">
			<Box flex={1} bg="teal.200" />
			<Box flex={1} bg="teal.300" />
			<Box flex={1} bg="teal.400" />
		</HStack>
	);
};
