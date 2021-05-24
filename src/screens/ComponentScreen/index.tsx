import React from "react";
import { ScrollView } from "react-native";
import { Header } from "../../components/Header";
import {
	Heading,
	Text,
	VStack,
	Box,
	useColorMode,
} from "../../../nb/NativeBase/src";
import { mapping } from "../../config/map";
import { StackNavigationProp } from "@react-navigation/stack";

export function Examples({
	route,
	navigation,
}: {
	route: any;
	navigation: StackNavigationProp<any>;
}) {
	let name: string = route.params.name;

	//@ts-ignore
	const component = mapping[name];
	console.log(component);
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Box bg="white">
			<Header title={component.title} navigation={navigation} />

			<ScrollView>
				<VStack space={2} p={2} mb={24}>
					<Text my={10} fontSize="xl">
						{component.description}
					</Text>
					{component.components.map((element: any, index: number) => (
						<VStack space={2} key={index}>
							<Heading>{element.title}</Heading>
							{/* <Divider /> */}
							<element.component.Example />
							<Text>{element.description}</Text>
						</VStack>
					))}
				</VStack>
			</ScrollView>
		</Box>
	);
}
