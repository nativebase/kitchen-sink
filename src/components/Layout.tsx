import React from 'react';
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
import { Floaters } from '../components/Floaters';
import { Logo } from './Logo';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const Layout = ({ children, _status, _logo, ...props }: any) => {
	const { colorMode, toggleColorMode } = useColorMode();
	const safeArea = useSafeAreaInsets();

	return (
		<>
			<Box
				bg={useColorModeValue('slateGray.50', 'blueGray.700')}
				{..._status}
				height={safeArea.top}
				_web={{
					mt: {
						base: 6,
						sm: 6,
						md: 0,
					},
				}}
			/>

			<Box
				{...props}
				flex={1}
				bg={useColorModeValue('slateGray.50', 'blueGray.700')}
				px={{
					base: 4,
					lg: '10%',
				}}
			>
				<HStack
					px={{
						base: 4,
						lg: '10%',
					}}
					position="absolute"
					top={0}
					left={0}
					right={0}
					zIndex={-1}
				>
					<Logo
						// size={{ base: 64, md: 512 }}
						{..._logo}
						zIndex={-1}
						size={64}
						position="absolute"
						top={-120}
						right={-60}
					/>
					<HStack py={2} alignItems="flex-end">
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
				</HStack>
				<Floaters />
				{children}
			</Box>
		</>
	);
};
