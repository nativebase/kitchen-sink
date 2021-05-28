import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import {
	Box,
	Button,
	Column,
	Row,
	useColorMode,
	Center,
	Heading,
	HStack,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { mapping } from "../../config/map";
import { ScrollView, StatusBar } from "react-native";

export function MasonLayout({
	navigation,
}: {
	navigation: StackNavigationProp<any>;
}) {
	const { colorMode, toggleColorMode } = useColorMode();

	const leftcolors = [
		["cyan.500", "emerald.300"],
		["red.400", "amber.400"],
		["blue.400", "pink.400"],
		// ["teal.200", "yello.100"],
		["green.700", "lime.200"],
		["blue.400", "purple.400"],
		["fuchsia.400", "pink.400"],
		["rose.500", "amber.500"],
		// ["lightBlue.300", "violet.400"],
		// ["cyan.400", "lime.500"],
		// ["yellow.300", "pink.400"],
		// ["cyan.400", "violet.800"],
		// ["lightBlue.600", "orange.700"],
		// ["lighBlue.600", "orange.700"],
	];
	const rightColors = [
		["green.700", "lime.200"],
		["blue.400", "pink.400"],
		["fuchsia.400", "pink.400"],
		["rose.500", "amber.500"],
		["cyan.500", "emerald.300"],
		["red.400", "amber.400"],
		["blue.400", "pink.400"],
		["teal.200", "yello.100"],
		// ["amber.400", "orange.500"],
		// ["teal.300", "emerald.500"],
		// ["fuchsia.500", "blue.400"],
		// ["pink.300", "orange.500"],
		// ["indigo.500", "red.200"],
	];
	//@ts-ignore
	const leftElements = [];
	//@ts-ignore
	const rightElements = [];
	Object.keys(mapping).map((key, index) => {
		if (index % 2 !== 0) {
			//@ts-ignore
			leftElements.push(mapping[key]);
		} else {
			//@ts-ignore
			rightElements.push(mapping[key]);
		}
	});
	return (
		<Box safeAreaTop flex={1} bg="gray.800">
			<StatusBar barStyle="light-content" translucent={false} />
			<HStack
				alignItems="center"
				px={2}
				backgroundColor=""
				borderRadius="lg"
				m={2}
				bg="gray.800"
			>
				<Heading color="white" p={3}>
					NativeBase@3.0.0
				</Heading>
			</HStack>
			<ScrollView contentContainerStyle={{ width: "100%" }}>
				<Row space={4} mx={4}>
					<Column flex={1} space={4}>
						{
							//@ts-ignore
							leftElements.map((component, index) => {
								return (
									<Box
										rounded="xl"
										bg={{
											linearGradient: {
												colors: leftcolors[index % 7],
												// colors: ["lighBlue.200", "pink.700"],
												start: [0, 0],
												end: [0, 1],
											},
										}}
									>
										<Button
											variant="unstyled"
											py={4}
											onPress={() =>
												navigation.navigate("component", {
													name: component.title,
												})
											}
										>
											<Center py={8} px={1} w="100%">
												<Heading color="white" size="sm">
													{component.title}
												</Heading>
												{component.basic ? <component.basic.Example /> : <></>}
											</Center>
										</Button>
									</Box>
								);
							})
						}
					</Column>
					<Column flex={1} space={4}>
						{
							//@ts-ignore
							rightElements.map((component, index) => {
								return (
									<Box
										bg={{
											linearGradient: {
												colors: rightColors[index % 7],
												start: [0, 0],
												end: [0, 1],
											},
										}}
										rounded="xl"
									>
										<Button
											variant="unstyled"
											py={4}
											onPress={() =>
												navigation.navigate("component", {
													name: component.title,
												})
											}
										>
											<Center py={8} px={1}>
												<Heading size="sm" color="white">
													{component.title}
												</Heading>
												{component.basic ? <component.basic.Example /> : <></>}
											</Center>
										</Button>
									</Box>
								);
							})
						}
					</Column>
				</Row>
			</ScrollView>
		</Box>
	);
}
