import React from 'react';
import { Box } from 'native-base';
export function Example() {
	return (
		<Box
			// _text={{ color: 'white' }}
			size={20}
			rounded="lg"
			_light={{
				bg: 'emerald.300',
			}}
			_dark={{
				bg: 'emerald.400',
			}}
			position="relative"
			overflow="hidden"
			w="70%"
		>
			<Box
				_light={{
					bg: 'emerald.500',
				}}
				_dark={{
					bg: 'emerald.700',
				}}
				rounded="full"
				size={10}
				left={-1}
				top={1}
				opacity={0.6}
				zIndex={-1}
				position="absolute"
			/>
			<Box
				_light={{
					bg: 'emerald.500',
				}}
				_dark={{
					bg: 'emerald.700',
				}}
				rounded="full"
				size={7}
				right={-3}
				top={5}
				zIndex={-1}
				position="absolute"
			/>

			<Box
				_light={{
					bg: 'emerald.500',
				}}
				_dark={{
					bg: 'emerald.700',
				}}
				size={40}
				left={10}
				top={1}
				opacity={0.6}
				zIndex={-1}
				position="absolute"
				style={{
					transform: [{ rotate: '45deg' }],
				}}
			/>
			<Box
				_light={{
					bg: 'emerald.300',
				}}
				_dark={{
					bg: 'emerald.400',
				}}
				size={10}
				right={5}
				bottom={-20}
				opacity={0.6}
				zIndex={-1}
				position="absolute"
				style={{
					transform: [{ rotate: '45deg' }],
				}}
			/>
		</Box>
	);
}
