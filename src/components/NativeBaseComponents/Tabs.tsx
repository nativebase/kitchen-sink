import React from "react";
import { Tabs } from "native-base";

export const Example = () => {
	return (
		<Tabs>
			<Tabs.Bar>
				<Tabs.Tab>ONE</Tabs.Tab>
				<Tabs.Tab>TWO</Tabs.Tab>
			</Tabs.Bar>
			<Tabs.Views>
				<Tabs.View>Hello, One</Tabs.View>
				<Tabs.View>Hello, Two</Tabs.View>
			</Tabs.Views>
		</Tabs>
	);
};
