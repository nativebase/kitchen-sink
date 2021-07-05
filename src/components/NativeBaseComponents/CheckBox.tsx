import React from 'react';
import { Box, Checkbox } from 'native-base';

export const Example = () => {
	return (
		<Box
			p={4}
			rounded="full"
			_light={{
				bg: 'red.100',
			}}
			_dark={{
				bg: 'red.800',
			}}
			opacity={0.5}
		>
			<Checkbox value="" isChecked={true} colorScheme="red" />
		</Box>
	);
};
