import React from "react";
import { Select, VStack, CheckIcon } from "native-base";

export const Example = () => {
	let [language, setLanguage] = React.useState("");

	return (
		<Select
			mt={4}
			selectedValue={language}
			minWidth={120}
			accessibilityLabel="Select your favorite programming language"
			placeholder="Select your favorite programming language"
			onValueChange={(itemValue) => setLanguage(itemValue)}
			_selectedItem={{
				bg: "cyan.600",
				endIcon: <CheckIcon size={4} />,
			}}
		>
			<Select.Item label="JavaScript" value="js" />
			<Select.Item label="TypeScript" value="ts" />
			<Select.Item label="C" value="c" />
			<Select.Item label="Python" value="py" />
			<Select.Item label="Java" value="java" />
		</Select>
	);
};
