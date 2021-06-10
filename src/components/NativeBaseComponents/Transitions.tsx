import React from 'react';
import { Fade, Button, Box, HStack } from 'native-base';
export const Example = () => {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<HStack ml={4}>
			<Box bg="cyan.200" size={12} ml={-4} opacity={0.5} rounded="full" />
			<Box bg="cyan.300" size={12} ml={-4} opacity={0.5} rounded="full" />
			<Box bg="cyan.500" size={12} ml={-4} opacity={0.5} rounded="full" />
			<Box bg="cyan.600" size={12} ml={-4} opacity={0.5} rounded="full" />
		</HStack>
	);
};
