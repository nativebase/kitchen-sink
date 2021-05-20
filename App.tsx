import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Box, NativeBaseProvider } from "native-base";
import { DashboardTheme } from "./src/theme";
import { DashboardStack } from "./src/navigators/dashboardNavigator";

export default function App() {
	return (
		<NavigationContainer>
			<NativeBaseProvider theme={DashboardTheme}>
				<Box safeAreaTop flex={1}>
					<DashboardStack />
				</Box>
			</NativeBaseProvider>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
