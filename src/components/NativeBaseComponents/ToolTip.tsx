import React from 'react';
import { VStack, Box, HStack } from 'native-base';

export function Example() {
	return (
		<VStack
			w="60%"
			rounded="md"
			_light={{
				bg: 'cyan.600',
			}}
			_dark={{
				bg: 'cyan.800',
			}}
			// space={4}
			p={4}
			justifyContent="center"
		>
			<Box
				_light={{
					bg: 'gray.600',
				}}
				_dark={{
					bg: 'gray.100',
				}}
				h="7px"
				rounded="pill"
				w="100%"
			/>

			<Box
				_light={{
					bg: 'cyan.600',
				}}
				_dark={{
					bg: 'cyan.800',
				}}
				size={4}
				right={5}
				bottom={-8}
				// zIndex={-1}
				position="absolute"
				style={{
					transform: [{ rotate: '45deg' }],
				}}
			/>
		</VStack>
	);
}
