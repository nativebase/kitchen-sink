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
	MoonIcon,
	SunIcon,
	Stagger,
	IconButton,
} from 'native-base';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
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

	// const isLargeScreen = useBreakpointValue({
	// 	base: false,
	// 	sm: false,
	// 	md: false,
	// 	lg: true,
	// });

	return (
		<Box
			safeAreaTop
			flex={1}
			bg={useColorModeValue('slateGray.50', 'blueGray.700')}
			// _web={{
			// 	px: '10vw',
			// }}
			px={{
				base: 4,
				lg: '10%',
			}}
		>
			<StatusBar
				barStyle={colorMode == 'dark' ? 'light-content' : 'dark-content'}
				backgroundColor={colorMode == 'dark' ? '#27272a' : '#f3f2f2'}
				translucent={false}
			/>
			<Fab
				shadow={7}
				_light={{
					bg: 'orange.100',
					_hover: {
						bg: 'orange.200',
					},
					_pressed: {
						bg: 'orange.300',
					},
				}}
				_dark={{
					bg: 'violet.100',
					_hover: {
						bg: 'violet.200',
					},
					_pressed: {
						bg: 'violet.300',
					},
				}}
				p={3}
				icon={
					<Icon
						as={Ionicons}
						_light={{ name: 'sunny', color: 'orange.600' }}
						_dark={{ name: 'moon', color: 'violet.900' }}
						size="md"
					/>
				}
				onPress={toggleColorMode}
			>
				<Stagger
					visible={true}
					initial={{
						opacity: 0,
						scale: 0,
						translateY: 34,
					}}
					animate={{
						translateY: 0,
						scale: 1,
						opacity: 1,
						transition: {
							type: 'spring',
							mass: 0.8,
							stagger: {
								offset: 30,
								reverse: true,
							},
						},
					}}
					exit={{
						translateY: 34,
						scale: 0.5,
						opacity: 0,
						transition: {
							duration: 100,
							stagger: {
								offset: 30,
								reverse: true,
							},
						},
					}}
				>
					<IconButton
						mb={4}
						variant="solid"
						rounded="full"
						icon={<MaterialCommunityIcons size={24} name="share" />}
					/>
					<IconButton
						mb={4}
						variant="solid"
						rounded="full"
						icon={<MaterialCommunityIcons size={24} name="heart" />}
					/>
					<IconButton
						mb={4}
						variant="solid"
						rounded="full"
						icon={<MaterialCommunityIcons size={24} name="library" />}
					/>
					<IconButton
						mb={4}
						variant="solid"
						rounded="full"
						icon={<MaterialCommunityIcons size={24} name="lighthouse" />}
					/>
				</Stagger>
			</Fab>

			<HStack
				px={{
					base: 4,
					lg: '10%',
				}}
				position="absolute"
				top={0}
				left={0}
				right={0}
			>
				<Logo
					// size={{ base: 64, md: 512 }}
					size={64}
					position="absolute"
					top={-120}
					right={-60}
					// _web={{
					// 	top: -200,
					// 	right: -160,
					// }}
				/>
				<HStack safeAreaTop alignItems="flex-end">
					<Heading
						color={colorMode == 'dark' ? 'white' : 'gray.800'}
						// fontSize={{
						// 	lg: '3xl',
						// }}
						_web={{ py: 2 }}
					>
						NativeBase
					</Heading>
					{/* <Text color={colorMode == 'dark' ? 'white' : 'gray.800'}>v3</Text> */}
				</HStack>
				{/* <IconButton
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
				/> */}
			</HStack>

			<ScrollView contentContainerStyle={{ width: '100%' }}>
				<MasonaryLayout
					column={useBreakpointValue({
						base: [1, 1],
						sm: [1, 1],
						md: [1, 1, 1],
						lg: [1, 1, 1, 1],
					})}
					_hStack={{ space: 4, mt: 16 }}
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
