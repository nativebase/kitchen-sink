import React from 'react';
import { Badge, Box } from 'native-base';

export function Example() {
	return (
		<Badge
			_light={{
				bg: 'green.400',
			}}
			colorScheme="success"
			p={2}
			w={{base: "50%", lg: "35%"}}
		>
			<Box
				_light={{
					bg: 'green.800',
					// bg: 'dark.200'
				}}
				_dark={{
					bg: 'info.100',
				}}
				rounded="sm"
				h="11px"
			/>
		</Badge>
	);
}
