import { Example as BoxCompositionCard } from "../../nb/NativeBase/example/storybook/stories/components/primitives/Box/composition-shoes-card";

export const mapping = {
	Box: {
		title: "Box",
		description: "",
		components: [
			{
				Component: require("../../nb/NativeBase/example/storybook/stories/components/primitives/Box/basic"),
				title: "Basic",
				description: "",
			},
			{
				Component: require("../../nb/NativeBase/example/storybook/stories/components/primitives/Box/composition-card"),
				title: "Composition Card",
				description: "",
			},
			{
				Component: require("../../nb/NativeBase/example/storybook/stories/components/primitives/Box/composition-card1"),
				title: "Composition Card 1",
				description: "",
			},
			{
				Component: require("../../nb/NativeBase/example/storybook/stories/components/primitives/Box/composition-card2"),
				title: "Composition Card 2",
				description: "",
			},
			{
				Component: require("../../nb/NativeBase/example/storybook/stories/components/primitives/Box/composition-card3"),
				title: "Composition Card 3",
				description: "",
			},
			{
				Component: require("../../nb/NativeBase/example/storybook/stories/components/primitives/Box/composition-shoes-card"),
				title: "Composition ShoesCard",
				description: "",
			},
		],
	},
};
