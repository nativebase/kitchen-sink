import React from "react";
import { HStack, Checkbox } from "native-base";

export const Example = () => {
	return (
		<Checkbox
			shadow={6}
			mt={3}
			value="test"
			accessibilityLabel="This is a dummy checkbox"
		/>
	);
};
