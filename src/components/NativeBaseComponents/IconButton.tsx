import React from 'react';
import { Button, Box } from 'native-base';
import { borderColor } from 'styled-system';

export const Example = () => {
	return (
		<Box
			// _text={{ color: 'white' }}
			p={4}
			rounded="lg"
			_light={{
				bg: 'blue.300',
			}}
			_dark={{
				bg: 'blue.400',
			}}
			position="relative"
			overflow="hidden"
		>
			<Box
				_light={{
					bg: 'blue.500',
				}}
				_dark={{
					bg: 'blue.700',
				}}
				rounded="full"
				size={20}
				left={5}
				top={-2}
				opacity={0.6}
				zIndex={-1}
				position="absolute"
			/>
			<Box
				_light={{
					bg: 'blue.900',
				}}
				_dark={{
					bg: 'gray.100',
				}}
				rounded="lg"
				size={6}
			/>
		</Box>
	);
};
