import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import {
	Box,
	Button,
	Column,
	Row,
	Text,
	useColorMode,
	Center,
	Heading,
} from "native-base";
import { mapping } from "../../config/map";
import { ScrollView } from "react-native";

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
		<Box bg={colorMode === "dark" ? "black" : "white"} pt={12}>
			<ScrollView contentContainerStyle={{ width: "100%" }}>
				<Row /* space={2}  mx={2}*/>
					<Column w="50%">
						{
							//@ts-ignore
							leftElements.map((component, index) => {
								return (
									<Button
										variant="unstyled"
										bg={leftcolors[index % 10]}
										py={4}
										rounded={0}
										onPress={() =>
											navigation.navigate("component", {
												name: component.title,
											})
										}
									>
										<Center py={8} px={2} w="100%">
											<Heading color="white">{component.title}</Heading>
											{component.basic ? <component.basic.Example /> : <></>}
										</Center>
									</Button>
									// </Box>
								);
							})
						}
					</Column>
					<Column
						w="50%"
						// space={2}
					>
						{
							//@ts-ignore
							rightElements.map((component, index) => {
								return (
									<Button
										variant="unstyled"
										bg={rightColors[index % 10]}
										py={4}
										rounded={0}
										onPress={() =>
											navigation.navigate("component", {
												name: component.title,
											})
										}
									>
										<Center py={8} px={2}>
											<Heading color="white">{component.title}</Heading>
											{component.basic ? <component.basic.Example /> : <></>}
										</Center>
									</Button>
								);
							})
						}
					</Column>
				</Row>
			</ScrollView>
		</Box>
	);
}
