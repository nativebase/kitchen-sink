import React from 'react';
import { Divider, Box, VStack, HStack } from 'native-base';

export const Example = () => {
	return (
		<VStack
			h={20}
			w={20}
			divider={<Divider border={2} borderColor="gray.400" />}
		>
			<HStack
				flex={1}
				bg="lime.500"
				h={20}
				divider={<Divider border={2} borderColor="gray.400" />}
			>
				<Box flex={1} bg="violet.200" />

				<Box flex={1} bg="violet.300" />
			</HStack>

			<Box flex={1} bg="violet.400" />
		</VStack>
	);
};
