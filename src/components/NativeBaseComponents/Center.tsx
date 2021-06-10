import React from 'react';
import { Box, Center } from 'native-base';
export function Example() {
	return (
		<Center
			_light={{
				bg: 'lightBlue.500',
			}}
			_dark={{
				bg: 'lightBlue.700',
			}}
			size={[10, 16, 24]}
			p={12}
			// rounded="md"
		>
			<Box rounded="lg" bg="yellow.300" size={[10, 16, 24]} />
		</Center>
	);
}
