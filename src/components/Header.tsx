import React from 'react';
import { Box, IconButton, Icon, HStack, ArrowBackIcon } from 'native-base';

import { Ionicons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';

export function Header({
	title,
	navigation,
}: {
	title: string;
	navigation: StackNavigationProp<any>;
}) {
	return (
		<Box>
			<HStack
				alignItems="center"
				py={2}
				mb={{ base: 8, md: 0 }}
				width={{ base: '100%', lg: '768px' }}
				alignSelf={{ base: 'stretch', md: 'center' }}
				ml={{ base: 0, md: '-16px' }}
			>
				<IconButton
					position="absolute"
					left={{ base: 0, md: 1 }}
					icon={
						<ArrowBackIcon />
					}
					_pressed={{ bg: 'transparent' }}
					colorScheme="coolGray"
					onPress={() => navigation.navigate('masonlayout')}
				></IconButton>

				{/* <Heading
					alignSelf="center"
					justifyContent="center"
					mx="auto"
					_light={{
						color: 'trueGray.700',
					}}
					_dark={{
						color: 'trueGray.700',
					}}
				>
					{title}
				</Heading> */}
				{/* {isLargeScreen ? (
					<IconButton
						size="md"
						icon={
							<Icon
								as={
									colorMode == 'dark' ? (
										<Ionicons name="sunny" color="white" />
									) : (
										<Ionicons name="moon" color="black" />
									)
								}
								size="lg"
							/>
						}
						onPress={toggleColorMode}
						mr={{ base: 3, md: 0 }}
					/>
				) : (
					<></>
				)} */}
			</HStack>
		</Box>
	);
}
