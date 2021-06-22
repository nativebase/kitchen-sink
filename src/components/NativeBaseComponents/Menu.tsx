import React from 'react';
import { Box, VStack, Divider, Center } from 'native-base';
import { Pressable } from 'react-native';

export function Example() {
	return (
		<Center w="80%">
			<Box position="relative" alignItems="flex-end">
				<Box
					// _text={{ color: 'white' }}
					p={2}
					right={0}
					w={10}
					rounded="lg"
					_light={{
						bg: 'cyan.200',
					}}
					_dark={{
						bg: 'cyan.300',
					}}
					position="relative"
					overflow="hidden"
				>
					<Box
						_light={{
							bg: 'cyan.400',
						}}
						_dark={{
							bg: 'cyan.500',
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
							bg: 'gray.600',
						}}
						_dark={{
							bg: 'gray.100',
						}}
						rounded="lg"
						size={6}
					/>
				</Box>
				<VStack
					position="relative"
					right={0}
					w={32}
					rounded="md"
					_light={{
						bg: 'cyan.50',
					}}
					_dark={{
						bg: 'cyan.400',
					}}
					space={4}
					divider={
						<Divider
							border={1}
							_light={{
								borderColor: 'cyan.300',
							}}
							_dark={{
								borderColor: 'cyan.200',
							}}
						/>
					}
					py={4}
					alignItems="center"
					justifyContent="center"
				>
					<Box
						_light={{
							bg: 'cyan.300',
						}}
						_dark={{
							bg: 'cyan.200',
						}}
						h="8px"
						rounded="pill"
						w="80%"
					/>
					<Box
						_light={{
							bg: 'cyan.300',
						}}
						_dark={{
							bg: 'cyan.200',
						}}
						h="8px"
						rounded="pill"
						w="80%"
					/>
					<Box
						_light={{
							bg: 'cyan.300',
						}}
						_dark={{
							bg: 'cyan.200',
						}}
						h="8px"
						rounded="pill"
						w="80%"
					/>
				</VStack>
			</Box>
		</Center>
	);
}
