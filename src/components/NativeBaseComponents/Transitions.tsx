import React from 'react';
import { Box, HStack, Center } from 'native-base';
export const Example = () => {
	return (
		<Center ml={4} w="80%">
			<HStack>
				<Box
					_light={{
						bg: 'orange.300',
					}}
					_dark={{
						bg: 'amber.400',
					}}
					size={12}
					ml={-4}
					opacity={0.5}
					rounded="full"
				/>
				<Box
					_light={{
						bg: 'orange.400',
					}}
					_dark={{
						bg: 'amber.300',
					}}
					size={12}
					ml={-4}
					opacity={0.5}
					rounded="full"
				/>
				<Box
					_light={{
						bg: 'orange.500',
					}}
					_dark={{
						bg: 'amber.200',
					}}
					size={12}
					ml={-4}
					opacity={0.5}
					rounded="full"
				/>
				<Box
					_light={{
						bg: 'orange.600',
					}}
					_dark={{
						bg: 'amber.50',
					}}
					size={12}
					ml={-4}
					opacity={0.5}
					rounded="full"
				/>
			</HStack>
		</Center>
	);
};
