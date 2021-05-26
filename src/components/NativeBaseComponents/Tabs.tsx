import React from "react";
import { Tabs } from "native-base";

export const Example = () => {
	return (
		<Tabs mt={4} shadow={6} bg="black">
			<Tabs.Bar>
				<Tabs.Tab>ONE</Tabs.Tab>
				<Tabs.Tab>TWO</Tabs.Tab>
			</Tabs.Bar>
			<Tabs.Views>
				<Tabs.View _text={{ color: "white" }}>Hello, One</Tabs.View>
				<Tabs.View _text={{ color: "white" }}>Hello, Two</Tabs.View>
			</Tabs.Views>
		</Tabs>
	);
};
