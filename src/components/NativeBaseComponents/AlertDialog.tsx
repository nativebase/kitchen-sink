import React from 'react';
import { VStack, Box, HStack } from 'native-base';

export function Example() {
	return (
		<VStack
			w={{base:'80%', lg:"60%"}}
			rounded="md"
			_light={{
				bg: 'darkBlue.100',
			}}
			_dark={{
				bg: 'darkBlue.600',
			}}
			// space={4}
			p={4}
			justifyContent="center"
		>
			<HStack space={2} mb={4}>
				<VStack space={1} flex={1}>
					<Box
						_light={{
							bg: 'lightBlue.600',
						}}
						_dark={{
							bg: 'gray.100',
						}}
						h="9px"
						rounded="pill"
						w="80%"
					/>

					<Box
						_light={{
							bg: 'lightBlue.600',
						}}
						_dark={{
							bg: 'gray.100',
						}}
						h="9px"
						rounded="pill"
						w="40%"
					/>
				</VStack>
			</HStack>

			<HStack justifyContent="flex-end" space={2} mt={4} >
				<Box
					p={2}
					px={3}
					rounded="lg"
					_light={{
						bg: 'green.300',
					}}
					_dark={{
						bg: 'green.400',
					}}
					overflow="hidden"
					w={{base:"40%", lg:"30%"}}
				>
					<Box
						_light={{
							bg: 'green.500',
						}}
						_dark={{
							bg: 'green.700',
						}}
						rounded="full"
						size={20}
						right="-52"
						top="-10"
						opacity={0.6}
						zIndex={-1}
						position="absolute"
					/>
					<Box
						_light={{
							bg: 'lightBlue.600',
						}}
						_dark={{
							bg: 'gray.100',
						}}
						rounded="pill"
						h="7px"
					/>
				</Box>
				<Box
					p={2}
					px={3}
					rounded="lg"
					_light={{
						bg: 'red.300',
					}}
					_dark={{
						bg: 'red.400',
					}}
					overflow="hidden"
					w={{base:"40%", lg:"30%"}}
				>
					<Box
						_light={{
							bg: 'red.500',
						}}
						_dark={{
							bg: 'red.700',
						}}
						rounded="full"
						size={20}
						right="-52"
						top="-10"
						opacity={0.6}
						zIndex={-1}
						position="absolute"
					/>
					<Box
						_light={{
							bg: 'lightBlue.600',
						}}
						_dark={{
							bg: 'gray.100',
						}}
						rounded="pill"
						h="7px"
					/>
				</Box>
			</HStack>
		</VStack>
	);
}
