import React from 'react';
import { Divider, Box, VStack, HStack } from 'native-base';

export const Example = () => {
	return (
		<HStack h={10} w="70%">
			<Box flex={1} bg="violet.200" />
			<Box flex={1} bg="violet.300" />
			<Box flex={1} bg="violet.400" />
		</HStack>
	);
};
