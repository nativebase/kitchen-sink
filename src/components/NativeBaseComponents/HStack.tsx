import React from 'react';
import { HStack, Box, Divider } from 'native-base';

export function Example() {
	return (
		<HStack h={8} space={2} w="70%">
			<Box
				rounded="md"
				flex={1}
				_light={{
					bg: 'orange.400',
				}}
				_dark={{
					bg: 'orange.200',
				}}
				bg="orange.200"
			/>
			<Box
				rounded="md"
				flex={1}
				_light={{
					bg: 'orange.500',
				}}
				_dark={{
					bg: 'orange.200',
				}}
			/>
			<Box
				rounded="md"
				flex={1}
				_light={{
					bg: 'orange.600',
				}}
				_dark={{
					bg: 'orange.200',
				}}
			/>
		</HStack>
	);
}
