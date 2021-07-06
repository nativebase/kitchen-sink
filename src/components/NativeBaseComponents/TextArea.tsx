import React from 'react';
import { TextArea, VStack, Box } from 'native-base';

export const Example = () => {
	return (
		<VStack justifyContent="center" w="80%">
			<Box position="absolute" w="100%">
				<Box
					position="relative"
					_light={{
						bg: 'green.100',
					}}
					_dark={{
						bg: 'green.600',
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
						bg: 'green.100',
					}}
					_dark={{
						bg: 'green.600',
					}}
					h="8px"
					rounded="pill"
					w="30%"
					mx={5}
				/>
			</Box>
			<TextArea aria-label="textArea1" mt={4} w="100%" h={20}  zIndex={-1} borderWidth={0} 
			_light={{
				bg: 'teal.500',
			}}
			_dark={{
				bg: 'green.300',
			}}
			/>
			{/* <Box w="100%" h={20} bg="red.200" zIndex={-1}></Box> */}
		</VStack>
	);
};
