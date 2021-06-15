import React from 'react';
import { CircularProgress } from 'native-base';

export const Example = () => {
	return (
		<CircularProgress
			size={12}
			value={33}
			trackColor="green.100"
			colorScheme="green"
			style={{
				transform: [{ rotate: '77deg' }],
			}}
		/>
	);
};
