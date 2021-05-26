import React from "react";
import { Slider, Box } from "native-base";

export const Example = () => {
	return (
		<Slider defaultValue={70} colorScheme="red" mt={4}>
			<Slider.Track>
				<Slider.FilledTrack />
			</Slider.Track>
			<Slider.Thumb />
		</Slider>
	);
};
