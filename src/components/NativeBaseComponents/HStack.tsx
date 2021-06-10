import React from 'react';
import { HStack, Box, Divider } from 'native-base';

export function Example() {
	return (
		<HStack h={8} space={2} w="70%">
			<Box rounded="md" flex={1} bg="violet.200" />
			<Box rounded="md" flex={1} bg="violet.300" />
			<Box rounded="md" flex={1} bg="violet.400" />
		</HStack>
	);
}
