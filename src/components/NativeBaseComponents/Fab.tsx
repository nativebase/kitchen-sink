import React from 'react';
import { Box, AddIcon } from 'native-base';

export const Example = () => {
	return (
		<Box
			rounded="full"
			_light={{
				bg: 'violet.500',
			}}
			_dark={{
				bg: 'violet.200',
			}}
			p={3}
		>
			<AddIcon
				_light={{
					color: 'violet.200',
				}}
				_dark={{
					color: 'violet.500',
				}}
				color="violet.200"
				size="sm"
			/>
		</Box>
	);
};
