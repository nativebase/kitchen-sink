import { Example as BoxCompositionCard } from "../../nb/NativeBase/example/storybook/stories/components/primitives/Box/composition-shoes-card";

export const mapping = {
	Box: {
		title: "Box",
		description: "",
		components: [
			{
				component: require("../../nb/NativeBase/example/storybook/stories/components/primitives/Box/basic"),
				title: "Basic",
				description: "",
			},
			{
				component: require("../../nb/NativeBase/example/storybook/stories/components/primitives/Box/composition-card"),
				title: "Composition Card",
				description: "",
			},
			{
				component: require("../../nb/NativeBase/example/storybook/stories/components/primitives/Box/composition-card1"),
				title: "Composition Card 1",
				description: "",
			},
			{
				component: require("../../nb/NativeBase/example/storybook/stories/components/primitives/Box/composition-card2"),
				title: "Composition Card 2",
				description: "",
			},
			{
				component: require("../../nb/NativeBase/example/storybook/stories/components/primitives/Box/composition-card3"),
				title: "Composition Card 3",
				description: "",
			},
			{
				component: require("../../nb/NativeBase/example/storybook/stories/components/primitives/Box/composition-shoes-card"),
				title: "Composition ShoesCard",
				description: "",
			},
		],
	},
	Button: {
		title: "Button",
		description: "Primitive Element",
		components: [
			{
				component: require("../../nb/NativeBase/example/storybook/stories/components/primitives/Button/basic"),
				title: "Basic",
				description: "",
			},
			{
				component: require("../../nb/NativeBase/example/storybook/stories/components/primitives/Button/ButtonGroup"),
				title: "ButtonGroup",
				description: "",
			},
			{
				component: require("../../nb/NativeBase/example/storybook/stories/components/primitives/Button/Composition"),
				title: "Composition",
				description: "",
			},
			{
				component: require("../../nb/NativeBase/example/storybook/stories/components/primitives/Button/icons"),
				title: "Icons",
				description: "",
			},
			{
				component: require("../../nb/NativeBase/example/storybook/stories/components/primitives/Button/loading"),
				title: "Loading button",
				description: "",
			},
			{
				component: require("../../nb/NativeBase/example/storybook/stories/components/primitives/Button/sizes"),
				title: "Sizes",
				description: "",
			},
			{
				component: require("../../nb/NativeBase/example/storybook/stories/components/primitives/Button/variants"),
				title: "variants",
				description: "",
			},
			{
				component: require("../../nb/NativeBase/example/storybook/stories/components/primitives/Button/WithRef"),
				title: "With References",
				description: "",
			},
		],
	},
};
