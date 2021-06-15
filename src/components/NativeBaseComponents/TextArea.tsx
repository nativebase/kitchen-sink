import React from 'react';
import { TextArea, VStack, Box } from 'native-base';

export const Example = () => {
	return (
		<VStack justifyContent="center" w="80%">
			<Box position="absolute" w="100%">
				<Box
					position="relative"
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
					mb={2}
				/>
				<Box
					position="relative"
					_light={{
						bg: 'gray.600',
					}}
					_dark={{
						bg: 'gray.100',
					}}
					h="8px"
					rounded="pill"
					w="30%"
					mx={5}
				/>
			</Box>
			<TextArea mt={4} w="100%" h={20} isDisabled zIndex={-1} />
		</VStack>
	);
};
