import React from "react";
import { Button, useToast } from "native-base";

export const Example = () => {
	const toast = useToast();

	return (
		<Button
			mt={4}
			onPress={() =>
				toast.show({
					title: "Hello world",
				})
			}
		>
			Bottom
		</Button>
	);
};
