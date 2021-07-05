import React from 'react';
import { Button, Box } from 'native-base';
import { borderColor } from 'styled-system';

export const Example = () => {
	return (
		<Box
			p={4}
			rounded="lg"
			_light={{
				bg: 'cyan.300',
			}}
			_dark={{
				bg: 'cyan.400',
			}}
			position="relative"
			overflow="hidden"
			w="70%"
		>
			<Box
				_light={{
					bg: 'cyan.500',
				}}
				_dark={{
					bg: 'cyan.700',
				}}
				rounded="full"
				size={20}
				right="-12"
				top="-12"
				opacity={0.6}
				zIndex={-1}
				position="absolute"
			/>
			<Box
				_light={{
					bg: 'cyan.900',
				}}
				_dark={{
					bg: 'gray.100',
				}}
				rounded="pill"
				h="11px"
			/>
		</Box>
	);
};
