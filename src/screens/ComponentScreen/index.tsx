import React from "react";
import { ScrollView } from "react-native";
import { Header } from "../../components/Header";
import {
	Heading,
	Text,
	VStack,
	Box,
	useColorMode,
	Divider,
	Center,
	Flex,
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
		<Box bg="slateGray.50">
			<Header title={component.title} navigation={navigation} />

			<ScrollView>
				<VStack mx={2} space={2} p={2} mb={24}>
					<Text fontSize="xl">{component.description}</Text>
					{component.components.map((element: any, index: number) => (
						<Box
							shadow={1}
							bg="white"
							// py={2}
							my={2}
							mx={3}
							// p={4}
							borderRadius={16}
						>
							<VStack key={index}>
								<Heading p={4}>{element.title}</Heading>
								<Divider />
								{/* <Box flexWrap="wrap" bg="red.200"> */}
								<Flex alignItems="center" p={4} justifyContent="center">
									<element.component.Example />
								</Flex>
							</VStack>
						</Box>
					))}
				</VStack>
			</ScrollView>
		</Box>
	);
}
