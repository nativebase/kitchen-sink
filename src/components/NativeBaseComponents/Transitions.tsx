import React from 'react';
import { Fade, Button, Box, HStack } from 'native-base';
export const Example = () => {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<HStack ml={4} w="80%">
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
	);
};
