import React from 'react';
import { Divider, Box, VStack, HStack } from 'native-base';

export const Example = () => {
	return (
		<VStack
			h={20}
			w={20}
			divider={
				<Divider
					border={2}
					_light={{ borderColor: 'violet.100' }}
					_dark={{ borderColor: 'violet.600' }}
				/>
			}
		>
			<HStack
				flex={1}
				bg="lime.500"
				h={20}
				divider={
					<Divider
						border={2}
						_light={{ borderColor: 'violet.100' }}
						_dark={{ borderColor: 'violet.600' }}
					/>
				}
			>
				<Box flex={1} bg="violet.200" />

				<Box flex={1} bg="violet.300" />
			</HStack>

			<Box flex={1} bg="violet.400" />
		</VStack>
	);
};
