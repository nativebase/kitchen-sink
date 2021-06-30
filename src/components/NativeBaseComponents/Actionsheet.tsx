import React from 'react';
import { Alert, Divider, VStack, Skeleton, Box } from 'native-base';

export const Example = () => {
	return (
		<Box flex={1} w="100%" justifyContent="flex-end">
			<VStack
				_light={{
					bg: 'cyan.50',
				}}
				_dark={{
					bg: 'cyan.400',
				}}
				space={2}
				divider={
					<Divider
						_light={{
							bg: 'cyan.300',
						}}
						_dark={{
							bg: 'cyan.200',
						}}
					/>
				}
				py={2}
				// alignItems="center"
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
					mx={4}
					w="40%"
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
					mx={4}
					w="50%"
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
					mx={4}
					w="37%"
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
					mx={4}
					w="47%"
				/>
			</VStack>
		</Box>
	);
};
