import React from 'react';
import { Alert, HStack, VStack, Center, Box } from 'native-base';

export const Example = () => {
	return (
		<VStack alignItems="center" w="80%">
			<HStack
				space={3}
				alignItems="center"
				p={2}
				rounded="md"
				_light={{
					bg: 'blue.100',
				}}
				_dark={{
					bg: 'blue.400',
				}}
				zIndex={9}
				w="80%"
			>
				<Box
					rounded="full"
					_light={{
						bg: 'blue.500',
					}}
					_dark={{
						bg: 'blue.200',
					}}
					size="24px"
				/>
				<VStack space={1} flex={1}>
					<Box
						_light={{
							bg: 'gray.600',
						}}
						_dark={{
							bg: 'gray.100',
						}}
						rounded="sm"
						h="11px"
						w="50%"
					/>
					<Box
						_light={{
							bg: 'gray.600',
						}}
						_dark={{
							bg: 'gray.100',
						}}
						h="8px"
						rounded="pill"
						w="100%"
					/>
				</VStack>
			</HStack>

			<HStack
				space={3}
				alignItems="center"
				mt={4}
				p={2}
				rounded="md"
				_light={{
					bg: 'blue.100',
				}}
				_dark={{
					bg: 'blue.400',
				}}
				w="65%"
				opacity={0.5}
				position="absolute"
				zIndex={1}
			>
				<Box
					rounded="full"
					_light={{
						bg: 'blue.500',
					}}
					_dark={{
						bg: 'blue.200',
					}}
					size="24px"
				/>
				<VStack space={1} flex={1}>
					<Box
						_light={{
							bg: 'gray.600',
						}}
						_dark={{
							bg: 'gray.100',
						}}
						rounded="sm"
						h="11px"
						w="50%"
					/>
					<Box
						_light={{
							bg: 'gray.600',
						}}
						_dark={{
							bg: 'gray.100',
						}}
						h="8px"
						rounded="pill"
						w="100%"
					/>
				</VStack>
			</HStack>

			<HStack
				space={3}
				alignItems="center"
				mt={8}
				p={2}
				rounded="md"
				_light={{
					bg: 'blue.100',
				}}
				_dark={{
					bg: 'blue.400',
				}}
				w="40%"
				opacity={0.1}
				zIndex={-1}
				position="absolute"
			>
				<Box
					rounded="full"
					_light={{
						bg: 'blue.500',
					}}
					_dark={{
						bg: 'blue.200',
					}}
					size="24px"
				/>
				<VStack space={1} flex={1}>
					<Box
						_light={{
							bg: 'gray.600',
						}}
						_dark={{
							bg: 'gray.100',
						}}
						rounded="sm"
						h="11px"
						w="50%"
					/>
					<Box
						_light={{
							bg: 'gray.600',
						}}
						_dark={{
							bg: 'gray.100',
						}}
						h="8px"
						rounded="pill"
						w="100%"
					/>
				</VStack>
			</HStack>
		</VStack>
	);
};
