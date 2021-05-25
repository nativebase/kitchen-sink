import React from "react";
import { Alert, Box } from "native-base";

export const Example = () => {
	return (
		<Alert mt={3}>
			<Alert.Icon />
			<Alert.Title>This is Alert</Alert.Title>
		</Alert>
	);
};
