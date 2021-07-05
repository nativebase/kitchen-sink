import React from 'react';
import { Box, HStack, VStack, Divider } from 'native-base';

export const Example = () => {
	return (
		<VStack
			w="70%"
			rounded="md"
			_light={{
				bg: 'pink.100',
			}}
			_dark={{
				bg: 'pink.200',
			}}
			space={4}
			p={4}
			justifyContent="center"
			mt={6}
		>
			<Box
				_light={{
					bg: 'white',
					opacity: 0.8
				}}
				_dark={{
					bg: 'gray.100',
				}}
				rounded="sm"
				h="11px"
				w="50%"
			/>
			<VStack space={1}>
				<Box
					_light={{
						bg: 'white',
						opacity: 0.8
					}}
					_dark={{
						bg: 'gray.100',
					}}
					h="7px"
					rounded="pill"
					w="90%"
				/>

				<Box
					_light={{
						bg: 'white',
						opacity: 0.8
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
						bg: 'white',
						opacity: 0.8
					}}
					_dark={{
						bg: 'gray.100',
					}}
					h="7px"
					rounded="pill"
					w="96%"
				/>
			</VStack>

			<Box
				// _text={{ color: 'white' }}
				p={2}
				px={3}
				rounded="lg"
				_light={{
					bg: 'pink.300',
				}}
				_dark={{
					bg: 'pink.400',
				}}
				position="relative"
				overflow="hidden"
				w={{base: "65%", lg: "30%"}}
				alignSelf="flex-end"
			>
				<Box
					_light={{
						bg: 'pink.500',
					}}
					_dark={{
						bg: 'pink.700',
					}}
					rounded="full"
					size={20}
					right="-32"
					top="-10"
					opacity={0.6}
					zIndex={-1}
					position="absolute"
				/>
				<Box
					_light={{
						bg: 'white',
					}}
					_dark={{
						bg: 'gray.100',
					}}
					rounded="pill"
					h="7px"
					
				/>
			</Box>
		</VStack>
	);
};
