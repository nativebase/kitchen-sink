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
			size={10}
			p={10}
		>
			<Box rounded="lg" bg="yellow.300" m={10} size={10} />
		</Center>
	);
}
