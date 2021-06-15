import { useColorMode, HStack, VStack } from 'native-base';
import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { mapping } from '../../config/map';
import { StoryBook } from '../StoryBook';

export const MasonMobile = ({
	navigation,
}: {
	navigation: StackNavigationProp<any>;
}) => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<HStack space={4} m={4}>
			<VStack flex={1} space={4}>
				<StoryBook
					navigation={navigation}
					name="Alert"
					h={40}
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
					name="Badge"
					h={32}
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
					name="Button"
					// colors={['blue.400', 'pink.400']}

					h={40}
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
					name="CheckBox"
					// colors={['green.700', 'lime.200']}

					h={32}
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
					name="Divider"
					// colors={['blue.400', 'purple.400']}
				/>
				<StoryBook
					navigation={navigation}
					name="Flex"
					// colors={['fuchsia.400', 'pink.400']}
				/>
				<StoryBook
					navigation={navigation}
					name="HStack"
					// colors={['rose.500', 'amber.500']}
				/>
				<StoryBook
					navigation={navigation}
					name="IconButton"
					// colors={['cyan.500', 'emerald.300']}
				/>
				<StoryBook
					navigation={navigation}
					name="Input"
					// colors={['red.400', 'amber.400']}
				/>
				<StoryBook
					navigation={navigation}
					name="Link"
					// colors={['blue.400', 'pink.400']}
				/>
				<StoryBook
					navigation={navigation}
					name="Modal"
					// colors={['green.700', 'lime.200']}
				/>
				<StoryBook
					navigation={navigation}
					name="Progress"
					// colors={['blue.400', 'purple.400']}
				/>
				<StoryBook
					navigation={navigation}
					name="Select"
					// colors={['fuchsia.400', 'pink.400']}
				/>
				<StoryBook
					navigation={navigation}
					name="Spinner"
					// colors={['rose.500', 'amber.500']}
				/>
				<StoryBook
					navigation={navigation}
					name="Tabs"
					// colors={['cyan.500', 'emerald.300']}
				/>
				<StoryBook
					navigation={navigation}
					name="Toast"
					// colors={['red.400', 'amber.400']}
				/>
				<StoryBook
					navigation={navigation}
					name="Transitions"
					// colors={['blue.400', 'pink.400']}
				/>
				<StoryBook
					navigation={navigation}
					name="ZStack"
					// colors={['green.700', 'lime.200']}
				/> */}
			</VStack>
			<VStack flex={1} space={4}>
				<StoryBook
					navigation={navigation}
					name="Avatar"
					// colors={['green.700', 'lime.200']}

					h={48}
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
					name="Box"
					h={40}
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
					name="Center"
					h={40}
					_box={{
						lightGrad: ['cyan.300', 'yellow.200'],
						darkGrad: ['cyan.400', 'yellow.300'],
					}}
					_heading={{
						color: 'yellow.100',
					}}
					// colors={['fuchsia.400', 'pink.600']}
				/>
				{/*

				<StoryBook
					navigation={navigation}
					name="VStack"
					// colors={['rose.500', 'amber.500']}

					h={48}
					_box={{
						lightGrad: ['rose.400', 'red.200'],
						darkGrad: ['rose.600', 'red.300'],
					}}
					_heading={{
						color: 'red.100',
					}}
				/>

        */}

				{/* 
        <StoryBook
					navigation={navigation}
					name="Fab"
					// colors={['cyan.500', 'emerald.300']}
					h={48}
					_box={{
						lightGrad: ['rose.400', 'red.200'],
						darkGrad: ['rose.600', 'red.300'],
					}}
					_heading={{
						color: 'red.100',
					}}
				/> 
        */}
				{/*

				<StoryBook
					navigation={navigation}
					name="Heading"
					// colors={['red.400', 'amber.400']}
				/>
				<StoryBook
					navigation={navigation}
					name="Icon"
					// colors={['blue.400', 'pink.400']}
				/>
				<StoryBook
					navigation={navigation}
					name="Image"
					// colors={['green.700', 'lime.200']}
				/>
				<StoryBook
					navigation={navigation}
					name="Menu"
					// colors={['blue.400', 'pink.400']}
				/>
				<StoryBook
					navigation={navigation}
					name="Popover"
					// colors={['fuchsia.400', 'pink.600']}
				/>
				<StoryBook
					navigation={navigation}
					name="Radio"
					// colors={['rose.500', 'amber.500']}
				/>
				<StoryBook
					navigation={navigation}
					name="Slider"
					// colors={['cyan.500', 'emerald.300']}
				/>
				<StoryBook
					navigation={navigation}
					name="Switch"
					// colors={['red.400', 'amber.400']}
				/>
				<StoryBook
					navigation={navigation}
					name="Text"
					// colors={['blue.400', 'pink.400']}
				/>
				<StoryBook
					navigation={navigation}
					name="TextArea"
					// colors={['green.700', 'lime.200']}
				/>
				<StoryBook
					navigation={navigation}
					name="Tooltip"
					// colors={['blue.400', 'pink.400']}
				/>*/}
			</VStack>
		</HStack>
	);
};
