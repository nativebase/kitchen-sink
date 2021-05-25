import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import {
	Box,
	Button,
	Center,
	Column,
	Divider,
	Flex,
	Heading,
	HStack,
	Icon,
	List,
	Row,
	SimpleGrid,
	Switch,
	Text,
	useColorMode,
	VStack,
} from "native-base";
import { MaterialCommunityIcons, Entypo, Ionicons } from "@expo/vector-icons";
import { mapping } from "../../config/map";
import { ScrollView } from "react-native";
import { Example as AlertExample } from "../../components/NativeBaseComponents/Alert";
import { Example as BtnExample } from "../../components/NativeBaseComponents/Button";
import { Example as BadgeExample } from "../../components/NativeBaseComponents/Badge";
import { Example as AvatarExample } from "../../components/NativeBaseComponents/Avatar";
import { Example as BoxExample } from "../../components/NativeBaseComponents/Box";
import { Example as CheckBoxExample } from "../../components/NativeBaseComponents/CheckBox";
import { Example as DividerExample } from "../../components/NativeBaseComponents/Divider";
import { Example as FlexExample } from "../../components/NativeBaseComponents/Flex";
import { Example as HStackExample } from "../../components/NativeBaseComponents/HStack";
import { Example as IconButtonExample } from "../../components/NativeBaseComponents/IconButton";
import { Example as InputExample } from "../../components/NativeBaseComponents/Input";
import { Example as ListExample } from "../../components/NativeBaseComponents/List";
import { Example as ModalExample } from "../../components/NativeBaseComponents/Modal";
import { Example as ProgressExample } from "../../components/NativeBaseComponents/Progress";
import { Example as SelectExample } from "../../components/NativeBaseComponents/Select";
import { Example as SpinnerExample } from "../../components/NativeBaseComponents/Spinner";
import { Example as TabsExample } from "../../components/NativeBaseComponents/Tabs";
import { Example as TextAreaExample } from "../../components/NativeBaseComponents/TextArea";
import { Example as ToolTipExample } from "../../components/NativeBaseComponents/ToolTip";
import { Example as ZStackExample } from "../../components/NativeBaseComponents/ZStack";

export function MasonLayout({
	navigation,
}: {
	navigation: StackNavigationProp<any>;
}) {
	const { colorMode, toggleColorMode } = useColorMode();

	const leftcolors = [
		"lightBlue.300",
		"violet.300",
		"cyan.400",
		"lime.500",
		"yellow.300",
		"pink.400",
		"cyan.400",
		"violet.800",
		"lightBlue.600",
		"pink.700",
	];
	const rightColors = [
		"amber.400",
		"orange.500",
		"teal.300",
		"emerald.500",
		"fuchsia.500",
		"blue.400",
		"pink.300",
		"orange.500",
		"indigo.500",
		"red.200",
	];
	const leftElements = [];
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
					<Column
						w="50%"
						// space={2}
					>
						{
							//@ts-ignore
							leftElements.map((component, index) => {
								return (
									<Button
										variant="unstyled"
										// h="150px"
										// bg="violet.500"
										bg={leftcolors[index % 10]}
										py={4}
										rounded={0}
									>
										<Box p={8}>
											<Text>{component.title}</Text>
											{component.basic ? <component.basic.Example /> : <></>}
										</Box>
									</Button>
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
										// h="170px"
										// bg="teal.500"
										bg={rightColors[index % 10]}
										py={4}
										rounded={0}
									>
										<Box p={8}>
											<Text>{component.title}</Text>
											{component.basic ? <component.basic.Example /> : <></>}
										</Box>
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
