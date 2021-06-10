import React from 'react';
import { Box, AddIcon } from 'native-base';

export const Example = () => {
	return (
		<Box
			rounded="full"
			_light={{
				bg: 'error.500',
			}}
			_dark={{
				bg: 'error.200',
			}}
			p={3}
		>
			<AddIcon
				_light={{
					color: 'red.200',
				}}
				_dark={{
					color: 'red.500',
				}}
				color="red.200"
				size="sm"
			/>
		</Box>
	);
};
