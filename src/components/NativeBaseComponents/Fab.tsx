import React from 'react';
import { Box, AddIcon } from 'native-base';

export const Example = () => {
	return (
		<Box
			rounded="full"
			_light={{
				bg: 'green.500',
			}}
			_dark={{
				bg: 'green.200',
			}}
			p={3}
		>
			<AddIcon
				_light={{
					color: 'green.200',
				}}
				_dark={{
					color: 'green.500',
				}}
				color="green.200"
				size="sm"
			/>
		</Box>
	);
};
