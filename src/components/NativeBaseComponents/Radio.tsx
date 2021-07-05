import React from 'react';
import { Box, Radio } from 'native-base';

export const Example = () => {
	return (
		<Box
			p={4}
			rounded="full"
			_light={{
				bg: 'orange.50',
			}}
			_dark={{
				bg: 'orange.600',
			}}
			opacity={0.5}
		>
			<Radio.Group name="exampleGroup" value="1">
				<Radio value="1" colorScheme="orange" />
			</Radio.Group>
		</Box>
	);
};
