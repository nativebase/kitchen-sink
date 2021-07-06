import React from 'react';
import { Input, VStack, Box } from 'native-base';

export const Example = () => {
	return (
		<VStack justifyContent="center" w="80%">
			<Input aria-label="input" size="xs" isDisabled />
			<Box
				position="absolute"
				_light={{
					bg: 'gray.600',
				}}
				_dark={{
					bg: 'gray.100',
				}}
				h="8px"
				rounded="pill"
				w="40%"
				mx={5}
			/>
		</VStack>
	);
};
