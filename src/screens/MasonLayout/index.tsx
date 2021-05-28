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
	Text,
	Fab,
	Icon,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { mapping } from "../../config/map";
import { ScrollView } from "react-native";
import { Logo } from "../../Icons/Logo";

export function MasonLayout({
	navigation,
}: {
	navigation: StackNavigationProp<any>;
}) {
	const { colorMode, toggleColorMode } = useColorMode();

	const leftcolors = [
		"lightBlue.300",
		"violet.400",
		"lime.500",
		"yellow.500",
		"pink.400",
		"cyan.400",
		"violet.300",
		"lightBlue.600",
		"pink.700",
		"cyan.400",
	];
	const rightColors = [
		"amber.400",
		"orange.500",
		"teal.600",
		"emerald.500",
		"fuchsia.500",
		"blue.400",
		"pink.300",
		"orange.500",
		"indigo.400",
		"red.400",
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
		// <Box
		// 	// bg={colorMode === "dark" ? "black" : "white"}
		// 	pt={12}
		// 	_text={{ color: "white", bg: "transparent" }}
		// >
		<ScrollView contentContainerStyle={{ width: "100%" }}>
			<Box bg="black">
				<HStack
					alignItems="center"
					px={2}
					backgroundColor="primary"
					// border={2}
					borderRadius="lg"
					m={2}
					// mb={2}
					// mx={2}
					bg="blueGray.300"
					// bg="white"
				>
					<Logo size="xl" />
					<Heading p={3}>NativeBase@3.0.0</Heading>
				</HStack>
				<Row space={2} ml={0} mr={6}>
					<Fab
						bg={colorMode == "dark" ? "black" : "white"}
						icon={
							<Icon
								as={
									colorMode == "dark" ? (
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
					<Column w="50%" space={2}>
						{
							//@ts-ignore
							leftElements.map((component, index) => {
								return (
									<Button
										variant="unstyled"
										bg={leftcolors[index % 10]}
										py={4}
										// rounded={0}
										onPress={() =>
											navigation.navigate("component", {
												name: component.title,
											})
										}
									>
										<Center py={8} px={1} w="100%">
											<Heading color="white">{component.title}</Heading>
											{component.basic ? <component.basic.Example /> : <></>}
										</Center>
									</Button>
									// </Box>
								);
							})
						}
					</Column>
					<Column w="50%" space={2}>
						{
							//@ts-ignore
							rightElements.map((component, index) => {
								return (
									<Button
										variant="unstyled"
										bg={rightColors[index % 10]}
										py={4}
										// rounded={0}
										onPress={() =>
											navigation.navigate("component", {
												name: component.title,
											})
										}
									>
										<Center py={8} px={1}>
											<Heading color="white">{component.title}</Heading>
											{component.basic ? <component.basic.Example /> : <></>}
										</Center>
									</Button>
								);
							})
						}
					</Column>
				</Row>
			</Box>
		</ScrollView>
	);
}
