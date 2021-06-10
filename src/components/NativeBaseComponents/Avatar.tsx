import React from 'react';
import { Avatar, Box } from 'native-base';

export const Example = () => {
	return (
		<Avatar
			shadow={6}
			mt={4}
			_light={{ bg: 'blue.300' }}
			_dark={{ bg: 'blue.400' }}
			_text={{
				opacity: 0,
			}}
		>
			NB
			<Avatar.Badge
				_light={{ bg: 'green.300' }}
				_dark={{ bg: 'green.400' }}
				borderWidth={0}
			/>
		</Avatar>
	);
};
