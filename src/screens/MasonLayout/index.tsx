import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import {
	Box,
	useColorMode,
	Heading,
	HStack,
	Text,
	useBreakpointValue,
	Fab,
	Icon,
	useColorModeValue,
	IconButton,
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { mapping } from '../../config/map';
import { Dimensions, ScrollView, StatusBar } from 'react-native';
import { MasonaryLayout } from '../../components/MasonLayout/MasonaryLayout';
import { MasonMobile } from '../../components/MasonLayout/mobile';
import { MasonWeb } from '../../components/MasonLayout/web';
import { Logo } from '../../icons/Logo';
import { StoryBook } from '../../components/StoryBook';

export function MasonLayout({
	navigation,
}: {
	navigation: StackNavigationProp<any>;
}) {
	const { colorMode, toggleColorMode } = useColorMode();
	const { width, height } = Dimensions.get('window');

	const isLargeScreen = useBreakpointValue({
		base: false,
		sm: false,
		md: false,
		lg: true,
	});

	return (
		<Box
			safeAreaTop
			flex={1}
			bg={useColorModeValue('slateGray.50', 'blueGray.700')}
			_web={{
				px: '10vw',
			}}
			testID="test"
		>
			<StatusBar
				barStyle={colorMode == 'dark' ? 'light-content' : 'dark-content'}
				backgroundColor={colorMode == 'dark' ? '#27272a' : '#f3f2f2'}
				translucent={false}
			/>
			{isLargeScreen ? (
				<></>
			) : (
				<Fab
					bg={colorMode == 'dark' ? 'black' : 'white'}
					icon={
						<Icon
							as={
								colorMode == 'dark' ? (
									<Ionicons name="sunny" size={24} color="white" />
								) : (
									<Ionicons name="moon" size={24} color="black" />
								)
							}
							size="lg"
						/>
					}
					onPress={toggleColorMode}
				/>
			)}
			<HStack
				px={{ base: 4, md: 0 }}
				borderRadius="lg"
				mb={4}
				// ml={{ base: 0, md: '-25px' }}
				py={2}
				space={2}
				alignItems="center"
				width={width > 1152 ? 1152 : 'auto'}
				alignSelf={width > 1152 ? 'center' : 'flex-start'}
				w="100%"
				position="relative"
			>
				<Logo
					size={{ base: 64, md: 512 }}
					position="absolute"
					top={-120}
					right={-60}
					_web={{
						top: -200,
						right: isLargeScreen ? -280 : -160,
					}}
				/>
				<HStack alignItems="flex-end">
					<Heading color={colorMode == 'dark' ? 'white' : 'gray.800'}>
						NativeBase
					</Heading>
					{/* <Text color={colorMode == 'dark' ? 'white' : 'gray.800'}>v3</Text> */}
				</HStack>
				{isLargeScreen ? (
					<IconButton
						ml="auto"
						size="md"
						icon={
							<Icon
								as={
									colorMode == 'dark' ? (
										<Ionicons name="sunny" />
									) : (
										<Ionicons name="moon" />
									)
								}
								color="blueGray.700"
								size="lg"
							/>
						}
						onPress={toggleColorMode}
						mr={{ base: 3, md: 0 }}
					/>
				) : (
					<></>
				)}
			</HStack>
			<ScrollView contentContainerStyle={{ width: '100%' }}>
				<MasonaryLayout
					column={useBreakpointValue({
						base: [1, 1],
						sm: [1, 1],
						md: [1, 1, 1],
						lg: [1, 1, 1, 1],
					})}
					_hStack={{ space: 4, m: 4 }}
					_vStack={{ space: 4 }}
				>
					<StoryBook
						navigation={navigation}
						name="Alert"
						minH={40}
						_box={{
							lightGrad: ['orange.400', 'amber.200'],
							darkGrad: ['orange.600', 'amber.300'],
						}}
						_heading={{
							color: 'amber.100',
						}}
					/>

					<StoryBook
						navigation={navigation}
						name="Avatar"
						// colors={['green.700', 'lime.200']}

						minH={48}
						_box={{
							lightGrad: ['violet.800', 'lightBlue.300'],
							darkGrad: ['violet.900', 'lightBlue.500'],
						}}
						_heading={{
							color: 'lightBlue.100',
						}}
					/>
					<StoryBook
						navigation={navigation}
						name="Badge"
						minH={32}
						_box={{
							lightGrad: ['emerald.400', 'lime.200'],
							darkGrad: ['emerald.600', 'lime.300'],
						}}
						_heading={{
							color: 'lime.100',
						}}
						// colors={['red.400', 'amber.400']}
					/>
					<StoryBook
						navigation={navigation}
						name="Box"
						minH={40}
						_box={{
							lightGrad: ['fuchsia.800', 'pink.300'],
							darkGrad: ['fuchsia.900', 'pink.500'],
						}}
						_heading={{
							color: 'pink.100',
						}}
						// colors={['blue.400', 'pink.400']}
					/>

					<StoryBook
						navigation={navigation}
						name="Button"
						// colors={['blue.400', 'pink.400']}

						minH={40}
						_box={{
							lightGrad: ['lightBlue.400', 'cyan.200'],
							darkGrad: ['lightBlue.600', 'cyan.300'],
						}}
						_heading={{
							color: 'cyan.100',
						}}
					/>

					<StoryBook
						navigation={navigation}
						name="Center"
						minH={40}
						_box={{
							lightGrad: ['cyan.300', 'yellow.200'],
							darkGrad: ['cyan.400', 'yellow.300'],
						}}
						_heading={{
							color: 'yellow.100',
						}}
						// colors={['fuchsia.400', 'pink.600']}
					/>

					<StoryBook
						navigation={navigation}
						name="CheckBox"
						// colors={['green.700', 'lime.200']}

						minH={32}
						_box={{
							lightGrad: ['rose.400', 'red.200'],
							darkGrad: ['rose.600', 'red.300'],
						}}
						_heading={{
							color: 'red.100',
						}}
					/>

					<StoryBook
						navigation={navigation}
						name="Divider"
						// colors={['blue.400', 'purple.400']}

						minH={40}
						_box={{
							lightGrad: ['rose.400', 'red.200'],
							darkGrad: ['rose.600', 'red.300'],
						}}
						_heading={{
							color: 'red.100',
						}}
					/>
					<StoryBook
						navigation={navigation}
						name="Flex"
						// colors={['fuchsia.400', 'pink.400']}
						minH={32}
						_box={{
							lightGrad: ['rose.400', 'red.200'],
							darkGrad: ['rose.600', 'red.300'],
						}}
						_heading={{
							color: 'red.100',
						}}
					/>

					<StoryBook
						navigation={navigation}
						name="HStack"
						// colors={['rose.500', 'amber.500']}
						minH={32}
						_box={{
							lightGrad: ['rose.400', 'red.200'],
							darkGrad: ['rose.600', 'red.300'],
						}}
						_heading={{
							color: 'red.100',
						}}
					/>

					<StoryBook
						navigation={navigation}
						name="IconButton"
						// colors={['cyan.500', 'emerald.300']}
						minH={32}
						_box={{
							lightGrad: ['rose.400', 'red.200'],
							darkGrad: ['rose.600', 'red.300'],
						}}
						_heading={{
							color: 'red.100',
						}}
					/>

					<StoryBook
						navigation={navigation}
						name="Input"
						// colors={['red.400', 'amber.400']}
						minH={32}
						_box={{
							lightGrad: ['rose.400', 'red.200'],
							darkGrad: ['rose.600', 'red.300'],
						}}
						_heading={{
							color: 'red.100',
						}}
					/>

					<StoryBook
						navigation={navigation}
						name="Link"
						// colors={['blue.400', 'pink.400']}
						minH={24}
						_box={{
							lightGrad: ['rose.400', 'red.200'],
							darkGrad: ['rose.600', 'red.300'],
						}}
						_heading={{
							color: 'red.100',
						}}
					/>
					<StoryBook
						navigation={navigation}
						name="Modal"
						// colors={['green.700', 'lime.200']}
						minH={48}
						_box={{
							lightGrad: ['rose.400', 'red.200'],
							darkGrad: ['rose.600', 'red.300'],
						}}
						_heading={{
							color: 'red.100',
						}}
					/>

					<StoryBook
						navigation={navigation}
						name="Progress"
						// colors={['blue.400', 'purple.400']}
						minH={24}
						_box={{
							lightGrad: ['rose.400', 'red.200'],
							darkGrad: ['rose.600', 'red.300'],
						}}
						_heading={{
							color: 'red.100',
						}}
					/>

					<StoryBook
						navigation={navigation}
						name="Select"
						// colors={['fuchsia.400', 'pink.400']}

						minH={32}
						_box={{
							lightGrad: ['rose.400', 'red.200'],
							darkGrad: ['rose.600', 'red.300'],
						}}
						_heading={{
							color: 'red.100',
						}}
					/>
					<StoryBook
						navigation={navigation}
						name="Spinner"
						// colors={['rose.500', 'amber.500']}
						minH={32}
						_box={{
							lightGrad: ['rose.400', 'red.200'],
							darkGrad: ['rose.600', 'red.300'],
						}}
						_heading={{
							color: 'red.100',
						}}
					/>
					{/* <StoryBook
						navigation={navigation}
						name="Tabs"
						// colors={['cyan.500', 'emerald.300']}
						minH={32}
						_box={{
							lightGrad: ['rose.400', 'red.200'],
							darkGrad: ['rose.600', 'red.300'],
						}}
						_heading={{
							color: 'red.100',
						}}
					/> */}
					<StoryBook
						navigation={navigation}
						name="Toast"
						// colors={['red.400', 'amber.400']}
						minH={32}
						_box={{
							lightGrad: ['rose.400', 'red.200'],
							darkGrad: ['rose.600', 'red.300'],
						}}
						_heading={{
							color: 'red.100',
						}}
					/>
					<StoryBook
						navigation={navigation}
						name="Transitions"
						// colors={['blue.400', 'pink.400']}
						minH={48}
						_box={{
							lightGrad: ['rose.400', 'red.200'],
							darkGrad: ['rose.600', 'red.300'],
						}}
						_heading={{
							color: 'red.100',
						}}
					/>

					<StoryBook
						navigation={navigation}
						name="ZStack"
						// colors={['green.700', 'lime.200']}
						// flex={4}
						minH={48}
						_box={{
							lightGrad: ['rose.400', 'red.200'],
							darkGrad: ['rose.600', 'red.300'],
						}}
						_heading={{
							color: 'red.100',
						}}
					/>
					{/* 
					<StoryBook
						navigation={navigation}
						name="VStack"
						// colors={['rose.500', 'amber.500']}

						minH={48}
						_box={{
							lightGrad: ['rose.400', 'red.200'],
							darkGrad: ['rose.600', 'red.300'],
						}}
						_heading={{
							color: 'red.100',
						}}
					/> */}

					<StoryBook
						navigation={navigation}
						name="Fab"
						// colors={['cyan.500', 'emerald.300']}
						minH={40}
						_box={{
							lightGrad: ['rose.400', 'red.200'],
							darkGrad: ['rose.600', 'red.300'],
						}}
						_heading={{
							color: 'red.100',
						}}
					/>

					<StoryBook
						navigation={navigation}
						name="Heading"
						// colors={['red.400', 'amber.400']}

						minH={32}
						_box={{
							lightGrad: ['orange.400', 'amber.200'],
							darkGrad: ['orange.600', 'amber.300'],
						}}
						_heading={{
							color: 'amber.100',
						}}
					/>
					<StoryBook
						navigation={navigation}
						name="Icon"
						// colors={['blue.400', 'pink.400']}

						minH={32}
						_box={{
							lightGrad: ['rose.400', 'red.200'],
							darkGrad: ['rose.600', 'red.300'],
						}}
						_heading={{
							color: 'red.100',
						}}
					/>
					<StoryBook
						navigation={navigation}
						name="Image"
						// colors={['green.700', 'lime.200']}

						minH={48}
						_box={{
							lightGrad: ['orange.400', 'amber.200'],
							darkGrad: ['orange.600', 'amber.300'],
						}}
						_heading={{
							color: 'amber.100',
						}}
					/>
					<StoryBook
						navigation={navigation}
						name="Menu"
						// colors={['blue.400', 'pink.400']}

						minH={64}
						_box={{
							lightGrad: ['orange.400', 'amber.200'],
							darkGrad: ['orange.600', 'amber.300'],
						}}
						_heading={{
							color: 'amber.100',
						}}
					/>
					<StoryBook
						navigation={navigation}
						name="Popover"
						// colors={['fuchsia.400', 'pink.600']}

						minH={40}
						_box={{
							lightGrad: ['orange.400', 'amber.200'],
							darkGrad: ['orange.600', 'amber.300'],
						}}
						_heading={{
							color: 'amber.100',
						}}
					/>
					<StoryBook
						navigation={navigation}
						name="Radio"
						// colors={['rose.500', 'amber.500']}

						minH={40}
						_box={{
							lightGrad: ['orange.400', 'amber.200'],
							darkGrad: ['orange.600', 'amber.300'],
						}}
						_heading={{
							color: 'amber.100',
						}}
					/>
					<StoryBook
						navigation={navigation}
						name="Slider"
						// colors={['cyan.500', 'emerald.300']}

						minH={24}
						_box={{
							lightGrad: ['orange.400', 'amber.200'],
							darkGrad: ['orange.600', 'amber.300'],
						}}
						_heading={{
							color: 'amber.100',
						}}
					/>
					<StoryBook
						navigation={navigation}
						name="Switch"
						// colors={['red.400', 'amber.400']}

						minH={32}
						_box={{
							lightGrad: ['orange.400', 'amber.200'],
							darkGrad: ['orange.600', 'amber.300'],
						}}
						_heading={{
							color: 'amber.100',
						}}
					/>
					<StoryBook
						navigation={navigation}
						name="Text"
						// colors={['blue.400', 'pink.400']}

						minH={32}
						_box={{
							lightGrad: ['orange.400', 'amber.200'],
							darkGrad: ['orange.600', 'amber.300'],
						}}
						_heading={{
							color: 'amber.100',
						}}
					/>
					<StoryBook
						navigation={navigation}
						name="TextArea"
						// colors={['green.700', 'lime.200']}

						minH={40}
						_box={{
							lightGrad: ['orange.400', 'amber.200'],
							darkGrad: ['orange.600', 'amber.300'],
						}}
						_heading={{
							color: 'amber.100',
						}}
					/>
					<StoryBook
						navigation={navigation}
						name="Tooltip"
						// colors={['blue.400', 'pink.400']}

						minH={40}
						_box={{
							lightGrad: ['orange.400', 'amber.200'],
							darkGrad: ['orange.600', 'amber.300'],
						}}
						_heading={{
							color: 'amber.100',
						}}
					/>
				</MasonaryLayout>
				{/* {isLargeScreen ? (
					<MasonWeb navigation={navigation} />
				) : (
					// <MasonMobile navigation={navigation} />
					<MasonMobile navigation={navigation} />
				)} */}
			</ScrollView>
		</Box>
	);
}
