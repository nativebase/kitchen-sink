import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { DashboardTheme } from "./src/theme";

import { Main } from "./src/components/Main";

export default function App() {
	return (
		<NavigationContainer>
			<NativeBaseProvider theme={DashboardTheme}>
				<Main />
			</NativeBaseProvider>
		</NavigationContainer>
	);
}

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: "#fff",
// 		alignItems: "center",
// 		justifyContent: "center",
// 	},
// });
