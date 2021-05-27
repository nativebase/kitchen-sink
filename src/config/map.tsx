import {} from "../components/NativeBaseComponents/Alert";
const baseUrl = "../nb/components";

export const mapping = {
	Alert: {
		title: "Alert",
		description: "",
		basic: require("../components/NativeBaseComponents/Alert"),
		components: [
			{
				component: require("../nb/components/composites/Alert/basic"),
				title: "Basic",
				description: "",
			},
			{
				component: require("../nb/components/composites/Alert/action"),
				title: "Action",
				description: "",
			},
			{
				component: require("../nb/components/composites/Alert/colorScheme"),
				title: "Color Scheme",
				description: "",
			},
			{
				component: require("../nb/components/composites/Alert/composition"),
				title: "Composition",
				description: "",
			},
			// {
			// 	component: require("../nb/components/composites/Alert/knobEnabled"),
			// 	title: "Knob Enabled",
			// 	description: "",
			// },
			// {
			// 	component: require("../nb/components/composites/Alert/"),
			// 	title: "",
			// 	description: "",
			// },
			{
				component: require("../nb/components/composites/Alert/status"),
				title: "Status",
				description: "",
			},
			{
				component: require("../nb/components/composites/Alert/variant"),
				title: "Variant",
				description: "",
			},
			{
				component: require("../nb/components/composites/Alert/usage"),
				title: "Usage",
				description: "",
			},
		],
	},
	Avatar: {
		title: "Avatar",
		description: "",
		basic: require("../components/NativeBaseComponents/Avatar"),
		components: [
			{
				component: require("../nb/components/composites/Avatar/AvatarBadge"),
				title: "Avatar Badge",
				description: "",
			},
			{
				component: require("../nb/components/composites/Avatar/AvatarGroup"),
				title: "Avatar Group",
				description: "",
			},
			{
				component: require("../nb/components/composites/Avatar/Fallback"),
				title: "Fallback",
				description: "",
			},
			{
				component: require("../nb/components/composites/Avatar/size"),
				title: "Size",
				description: "",
			},
			{
				component: require("../nb/components/composites/Avatar/usage"),
				title: "Usage",
				description: "",
			},
			// {
			// 	component: require("../nb/components/composites/Avatar/knobEnabled"),
			// 	title: "Knob Enabled",
			// 	description: "",
			// },
		],
	},
	Badge: {
		title: "Badge",
		description: "",
		basic: require("../components/NativeBaseComponents/Badge"),
		components: [
			{
				component: require("../nb/components/composites/Badge/color"),
				title: "Color",
				description: "",
			},
			{
				component: require("../nb/components/composites/Badge/composition"),
				title: "Composition",
				description: "",
			},
			{
				component: require("../nb/components/composites/Badge/variants"),
				title: "Variants",
				description: "",
			},
			{
				component: require("../nb/components/composites/Badge/usage"),
				title: "Usage",
				description: "",
			},
		],
	},
	Button: {
		title: "Button",
		description: "Primitive Element",
		basic: require("../components/NativeBaseComponents/Button"),
		components: [
			{
				component: require("../nb/components/primitives/Button/basic"),
				title: "Basic",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Button/ButtonGroup"),
				title: "ButtonGroup",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Button/Composition"),
				title: "Composition",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Button/icons"),
				title: "Icons",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Button/loading"),
				title: "Loading button",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Button/sizes"),
				title: "Sizes",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Button/variants"),
				title: "variants",
				description: "",
			},
			// {
			// 	component: require("../nb/components/primitives/Button/WithRef"),
			// 	title: "With References",
			// 	description: "",
			// },
		],
	},
	Box: {
		title: "Box",
		description: "",
		basic: require("../components/NativeBaseComponents/Box"),
		components: [
			{
				component: require("../nb/components/primitives/Box/basic"),
				title: "Basic",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Box/composition-card"),
				title: "Composition Card",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Box/composition-card1"),
				title: "Composition Card 1",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Box/composition-card2"),
				title: "Composition Card 2",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Box/composition-card3"),
				title: "Composition Card 3",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Box/composition-shoes-card"),
				title: "Composition ShoesCard",
				description: "",
			},
		],
	},
	Center: {
		title: "Center",
		description: "",
		basic: require("../components/NativeBaseComponents/Center"),
		components: [
			{
				component: require("../nb/components/composites/Center/Basic"),
				title: "Basic",
				description: "",
			},
			{
				component: require("../nb/components/composites/Center/SquareCircle"),
				title: "Square Circle",
				description: "",
			},
			{
				component: require("../nb/components/composites/Center/WithIcons"),
				title: "With Icons",
				description: "",
			},
		],
	},
	CheckBox: {
		title: "CheckBox",
		description: "Primitive Element",
		basic: require("../components/NativeBaseComponents/CheckBox"),
		components: [
			{
				component: require("../nb/components/primitives/Checkbox/basic"),
				title: "Basic",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Checkbox/checkboxGroup"),
				title: "CheckboxGroup",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Checkbox/controlledCheckbox"),
				title: "Controlled Checkbox",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Checkbox/customColor"),
				title: "CustomColor CheckBox",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Checkbox/customIcon"),
				title: "CustomIcon CheckBox",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Checkbox/disabled"),
				title: "Disabled CheckBox",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Checkbox/FormControlled"),
				title: "FormControlled CheckBox",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Checkbox/invalid"),
				title: "Invalid CheckBox",
				description: "",
			},
			// {
			// 	component: require("../nb/components/primitives/Checkbox/playground"),
			// 	title: "CheckBox",
			// 	description: "",
			// },
			{
				component: require("../nb/components/primitives/Checkbox/size"),
				title: "CheckBox",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Checkbox/uncontrolledCheckbox"),
				title: "CheckBox",
				description: "",
			},
			// {
			// 	component: require("../nb/components/primitives/Checkbox/withRef"),
			// 	title: "CheckBox",
			// 	description: "",
			// },
		],
	},
	Column: {
		title: "Column",
		description: "Renders your data vertically",
		basic: require("../components/NativeBaseComponents/Column"),
		components: [
			{
				component: require("../nb/components/primitives/Column/Basic"),
				title: "Basic",
				description: "",
			},
		],
	},
	Divider: {
		title: "Divider",
		description: "",
		basic: require("../components/NativeBaseComponents/Divider"),
		components: [
			{
				component: require("../nb/components/composites/Divider/Basic"),
				title: "Basic",
				description: "",
			},
			{
				component: require("../nb/components/composites/Divider/Composition"),
				title: "Composition",
				description: "",
			},
			{
				component: require("../nb/components/composites/Divider/Orientation"),
				title: "Orientation",
				description: "",
			},
		],
	},
	Fab: {
		title: "Fab",
		description: "",
		// basic: require("../components/NativeBaseComponents/"),
		components: [
			{
				component: require("../nb/components/composites/Fab/Basic"),
				title: "Basic",
				description: "",
			},
			{
				component: require("../nb/components/composites/Fab/CustomPosition"),
				title: "Custom Position",
				description: "",
			},
			{
				component: require("../nb/components/composites/Fab/Placement"),
				title: "Placement",
				description: "",
			},
		],
	},
	Flex: {
		title: "Flex",
		description: "Box with display='Flex'",
		basic: require("../components/NativeBaseComponents/Flex"),
		components: [
			{
				component: require("../nb/components/primitives/Flex/basic"),
				title: "Basic",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Flex/spacer"),
				title: "Spacer",
				description: "",
			},
		],
	},
	Heading: {
		title: "Heading",
		description: "It shows the Title",
		basic: require("../components/NativeBaseComponents/Heading"),
		components: [
			{
				component: require("../nb/components/primitives/Heading/Basic"),
				title: "Basic",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Heading/Composition"),
				title: "Composition",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Heading/OverridenStyle"),
				title: "OverridenStyle",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Heading/Sizes"),
				title: "Sizes",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Heading/Truncate"),
				title: "Truncate",
				description: "",
			},
		],
	},
	HStack: {
		title: "HStack",
		description: "Rows structure",
		basic: require("../components/NativeBaseComponents/HStack"),
		components: [
			{
				component: require("../nb/components/primitives/HStack/basic"),
				title: "Basic",
				description: "",
			},
		],
	},
	Icon: {
		title: "Icon",
		description: "Show Icon in NativeBase",
		basic: require("../components/NativeBaseComponents/Icon"),
		components: [
			{
				component: require("../nb/components/primitives/Icon/AllIcons"),
				title: "Basic",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Icon/Basic"),
				title: "Basic",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Icon/CreateIcon"),
				title: "Basic",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Icon/CustomIcon"),
				title: "Basic",
				description: "",
			},
		],
	},
	IconButton: {
		title: "IconButton",
		description: "",
		basic: require("../components/NativeBaseComponents/IconButton"),
		components: [
			{
				component: require("../nb/components/composites/IconButton/Basic"),
				title: "Basic",
				description: "",
			},
			{
				component: require("../nb/components/composites/IconButton/Sizes"),
				title: "Sizes",
				description: "",
			},
			{
				component: require("../nb/components/composites/IconButton/SVGIcon"),
				title: "SVGIcon",
				description: "",
			},
			{
				component: require("../nb/components/composites/IconButton/Variant"),
				title: "Variant",
				description: "",
			},
		],
	},
	Image: {
		title: "Image",
		description: "Show image in NativeBase",
		basic: require("../components/NativeBaseComponents/Image"),
		components: [
			{
				component: require("../nb/components/primitives/Image/Basic"),
				title: "Basic",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Image/BorderRadius"),
				title: "BorderRadius",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Image/FallbackSupport"),
				title: "FallbackSupport",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Image/Sizes"),
				title: "Sizes",
				description: "",
			},
			// {
			// 	component: require("../nb/components/primitives/Image/WithRef"),
			// 	title: "WithRef",
			// 	description: "",
			// },
		],
	},
	Input: {
		title: "Input",
		description: "",
		basic: require("../components/NativeBaseComponents/Input"),
		components: [
			{
				component: require("../nb/components/primitives/Input/Basic"),
				title: "Basic Input",
				description: "",
			},
			// {
			// 	component: require("../nb/components/primitives/Input/Controlled"),
			// 	title: "Controlled Input",
			// 	description: "",
			// },
			{
				component: require("../nb/components/primitives/Input/Elements"),
				title: "Elements",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Input/FormControlled"),
				title: "FormControlled",
				description: "",
			},
			// {
			// 	component: require("../nb/components/primitives/Input/Masked"),
			// 	title: "Masked",
			// 	description: "",
			// },
			{
				component: require("../nb/components/primitives/Input/Size"),
				title: "Size",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Input/Variant"),
				title: "Variant",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Input/Addons"),
				title: "Addons",
				description: "",
			},
		],
	},
	Link: {
		title: "Link",
		description: "Used to navigate",
		basic: require("../components/NativeBaseComponents/Link"),
		components: [
			{
				component: require("../nb/components/primitives/Link/Basic"),
				title: "Basic",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Link/CompositeLink"),
				title: "Composite Link",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Link/CustomOnPress"),
				title: "Custom Pressable link",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Link/ExternalLink"),
				title: "External link",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Link/UnderlineLink"),
				title: "Underline Link",
				description: "",
			},
		],
	},
	List: {
		title: "List",
		description: "",
		basic: require("../components/NativeBaseComponents/List"),
		components: [
			{
				component: require("../nb/components/primitives/List/Basic"),
				title: "Basic",
				description: "",
			},
			{
				component: require("../nb/components/primitives/List/OrderedList"),
				title: "Ordered list",
				description: "",
			},
			{
				component: require("../nb/components/primitives/List/UnorderedList"),
				title: "Unordered list",
				description: "",
			},
			{
				component: require("../nb/components/primitives/List/ListWithIcon"),
				title: "ListWithIcon",
				description: "",
			},
			{
				component: require("../nb/components/primitives/List/PressableList"),
				title: "Pressable list",
				description: "",
			},
			{
				component: require("../nb/components/primitives/List/StylingList"),
				title: "Styling list",
				description: "",
			},
			{
				component: require("../nb/components/primitives/List/VirtualizedList"),
				title: "Virtualized list",
				description: "",
			},
		],
	},
	Menu: {
		title: "Menu",
		description: "",
		basic: require("../components/NativeBaseComponents/Menu"),
		components: [
			{
				component: require("../nb/components/composites/Menu/Basic"),
				title: "Basic",
				description: "",
			},
			{
				component: require("../nb/components/composites/Menu/Group"),
				title: "Menu Group",
				description: "",
			},
			{
				component: require("../nb/components/composites/Menu/MenuOptionsGroup"),
				title: "Menu options Group",
				description: "",
			},
			{
				component: require("../nb/components/composites/Menu/MenuPositions"),
				title: "Menu Positions",
				description: "",
			},
		],
	},
	Modal: {
		title: "Modal",
		description: "",
		basic: require("../components/NativeBaseComponents/Modal"),
		components: [
			{
				component: require("../nb/components/composites/Modal/Basic"),
				title: "Basic",
				description: "",
			},
			{
				component: require("../nb/components/composites/Modal/ModalPlacement"),
				title: "ModalPlacement",
				description: "",
			},
			{
				component: require("../nb/components/composites/Modal/ModalRefEg"),
				title: "Modal Ref",
				description: "",
			},
			{
				component: require("../nb/components/composites/Modal/ModalWithAvoidKeyboard"),
				title: "Avoiding keyboard with Modal ",
				description: "",
			},
			{
				component: require("../nb/components/composites/Modal/MultipleModal"),
				title: "Multiple Modal",
				description: "",
			},
			{
				component: require("../nb/components/composites/Modal/Size"),
				title: "Size",
				description: "",
			},
		],
	},
	Popover: {
		title: "Popover",
		description: "",
		basic: require("../components/NativeBaseComponents/Popover"),
		components: [
			{
				component: require("../nb/components/composites/Popover/Basic"),
				title: "Basic",
				description: "",
			},
			{
				component: require("../nb/components/composites/Popover/PopoverPositions"),
				title: "Popover Positions",
				description: "",
			},
			{
				component: require("../nb/components/composites/Popover/RefEg"),
				title: "Ref Example",
				description: "",
			},
		],
	},
	Progress: {
		title: "Progress",
		description: "",
		basic: require("../components/NativeBaseComponents/Progress"),
		components: [
			{
				component: require("../nb/components/composites/Progress/Basic"),
				title: "Basic",
				description: "",
			},
			{
				component: require("../nb/components/composites/Progress/ColorScheme"),
				title: "Color schemes",
				description: "",
			},
			{
				component: require("../nb/components/composites/Progress/Composition"),
				title: "Composition",
				description: "",
			},
			{
				component: require("../nb/components/composites/Progress/CustomBgColor"),
				title: "Custom BgColor",
				description: "",
			},
			{
				component: require("../nb/components/composites/Progress/Flat"),
				title: "Flat",
				description: "",
			},
			{
				component: require("../nb/components/composites/Progress/Sizes"),
				title: "Sizes",
				description: "",
			},
		],
	},
	Radio: {
		title: "Radio",
		description: "",
		basic: require("../components/NativeBaseComponents/Radio"),
		components: [
			{
				component: require("../nb/components/primitives/Radio/controlledRadio"),
				title: "Controlled Radio",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Radio/formControlled"),
				title: "Form Controlled",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Radio/uncontrolledRadio"),
				title: "Uncontrolled Radio",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Radio/customColor"),
				title: "Custom Color",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Radio/customIcon"),
				title: "Custom con",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Radio/disabled"),
				title: "Disabled",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Radio/invalid"),
				title: "Invalid",
				description: "",
			},
			// {
			// 	component: require("../nb/components/primitives/Radio/playground"),
			// 	title: "Playground",
			// 	description: "",
			// },
			{
				component: require("../nb/components/primitives/Radio/size"),
				title: "Size",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Radio/withRef"),
				title: "with Ref",
				description: "",
			},
		],
	},
	Select: {
		title: "Select",
		description: "",
		basic: require("../components/NativeBaseComponents/Select"),
		components: [
			{
				component: require("../nb/components/primitives/Select/Basic"),
				title: "Basic",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Select/FormControlled"),
				title: "Form Controlled",
				description: "",
			},
		],
	},
	Slider: {
		title: "Slider",
		description: "",
		basic: require("../components/NativeBaseComponents/Slider"),
		components: [
			{
				component: require("../nb/components/primitives/Slider/color"),
				title: "Color",
				description: "",
			},
			// {
			// 	component: require("../nb/components/primitives/Slider/Customized"),
			// 	title: "Customized",
			// 	description: "",
			// },
			{
				component: require("../nb/components/primitives/Slider/FormControlled"),
				title: "Form Controlled",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Slider/Size"),
				title: "Size",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Slider/Value"),
				title: "Value",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Slider/Vertical"),
				title: "Vertical",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Slider/usage"),
				title: "Usage",
				description: "",
			},
			// {
			// 	component: require("../nb/components/primitives/Slider/Playground"),
			// 	title: "Playground",
			// 	description: "",
			// },
		],
	},
	Spinner: {
		title: "Spinner",
		description: "",
		basic: require("../components/NativeBaseComponents/Spinner"),
		components: [
			{
				component: require("../nb/components/primitives/Spinner/color"),
				title: "Color",
				description: "",
			},
			// {
			// 	component: require("../nb/components/primitives/Spinner/duration"),
			// 	title: "Duration",
			// 	description: "",
			// },
			{
				component: require("../nb/components/primitives/Spinner/size"),
				title: "Size",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Spinner/usage"),
				title: "Usage",
				description: "",
			},
			// {
			// 	component: require("../nb/components/primitives/Spinner/variant"),
			// 	title: "variant",
			// 	description: "",
			// },
		],
	},
	Switch: {
		title: "Switch",
		description: "",
		basic: require("../components/NativeBaseComponents/Switch"),
		components: [
			{
				component: require("../nb/components/primitives/Switch/Basic"),
				title: "Basic",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Switch/Accessibility"),
				title: "Accessibility",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Switch/ColorSchemes"),
				title: "Color Schemes",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Switch/Sizes"),
				title: "Sizes",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Switch/SwitchBgColor"),
				title: "Switch BgColor",
				description: "",
			},
			// {
			// 	component: require("../nb/components/primitives/Switch/example"),
			// 	title: "Composite Example",
			// 	description: "",
			// },
		],
	},
	Tabs: {
		title: "Tabs",
		description: "",
		basic: require("../components/NativeBaseComponents/Tabs"),
		components: [
			{
				component: require("../nb/components/composites/Tabs/Colors"),
				title: "Colored Tabs",
				description: "",
			},
			{
				component: require("../nb/components/composites/Tabs/Composition"),
				title: "Composition",
				description: "",
			},
			{
				component: require("../nb/components/composites/Tabs/Controlled"),
				title: "Controlled Tabs",
				description: "",
			},
			{
				component: require("../nb/components/composites/Tabs/FittedTab"),
				title: "Fitted Tab",
				description: "",
			},
			{
				component: require("../nb/components/composites/Tabs/IconTabs"),
				title: "Icon Tabs",
				description: "",
			},
			{
				component: require("../nb/components/composites/Tabs/Size"),
				title: "Sizes",
				description: "",
			},
			{
				component: require("../nb/components/composites/Tabs/TabAlignment"),
				title: "Tab Alignment",
				description: "",
			},
			{
				component: require("../nb/components/composites/Tabs/TabBarOnly"),
				title: "Tab Bar Only",
				description: "",
			},
			{
				component: require("../nb/components/composites/Tabs/Usage"),
				title: "Usage",
				description: "",
			},
			{
				component: require("../nb/components/composites/Tabs/Variants"),
				title: "Variants",
				description: "",
			},
		],
	},
	Text: {
		title: "Text",
		description: "",
		basic: require("../components/NativeBaseComponents/Text"),
		components: [
			{
				component: require("../nb/components/primitives/Text/Basic"),
				title: "Basic",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Text/ChangingFontSize"),
				title: "Changing Font Size",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Text/Nested"),
				title: "Nested texts",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Text/Overriden"),
				title: "Overriden Text",
				description: "",
			},
			{
				component: require("../nb/components/primitives/Text/Truncated"),
				title: "Truncated text",
				description: "",
			},
		],
	},
	TextArea: {
		title: "TextArea",
		description: "",
		basic: require("../components/NativeBaseComponents/TextArea"),
		components: [
			{
				component: require("../nb/components/primitives/TextArea/basic"),
				title: "Basic",
				description: "",
			},
			{
				component: require("../nb/components/primitives/TextArea/invalid"),
				title: "Invalid",
				description: "",
			},
			{
				component: require("../nb/components/primitives/TextArea/size"),
				title: "Size",
				description: "",
			},
			{
				component: require("../nb/components/primitives/TextArea/value"),
				title: "Value",
				description: "",
			},
		],
	},
	Toast: {
		title: "Toast",
		description: "",
		basic: require("../components/NativeBaseComponents/Toast"),
		components: [
			{
				component: require("../nb/components/composites/Toast/Basic"),
				title: "Basic",
				description: "",
			},
			{
				component: require("../nb/components/composites/Toast/CloseToast"),
				title: "Close Toast",
				description: "",
			},
			{
				component: require("../nb/components/composites/Toast/CustomComponent"),
				title: "Custom Component",
				description: "",
			},
			{
				component: require("../nb/components/composites/Toast/PreventDuplicate"),
				title: "Prevent Duplicate",
				description: "",
			},
			{
				component: require("../nb/components/composites/Toast/ToastPositions"),
				title: "Toast Positions",
				description: "",
			},
			{
				component: require("../nb/components/composites/Toast/ToastStatus"),
				title: "Toast Status",
				description: "",
			},
			{
				component: require("../nb/components/composites/Toast/ToastVariants"),
				title: "Toast Variants",
				description: "",
			},
		],
	},
	Tooltip: {
		title: "Tooltip",
		description: "",
		basic: require("../components/NativeBaseComponents/ToolTip"),
		components: [
			{
				component: require("../nb/components/composites/Tooltip/Basic"),
				title: "Basic",
				description: "",
			},
			{
				component: require("../nb/components/composites/Tooltip/CustomTooltip"),
				title: "Custom Tooltip",
				description: "",
			},
			{
				component: require("../nb/components/composites/Tooltip/TooltipPositions"),
				title: "Tooltip Positions",
				description: "",
			},
		],
	},
	Transitions: {
		title: "Transitions",
		description: "",
		basic: require("../components/NativeBaseComponents/Transitions"),
		components: [
			{
				component: require("../nb/components/composites/Transitions/Fade"),
				title: "Fade",
				description: "",
			},
			{
				component: require("../nb/components/composites/Transitions/ScaleFade"),
				title: "ScaleFade",
				description: "",
			},
			{
				component: require("../nb/components/composites/Transitions/Slide"),
				title: "Slide",
				description: "",
			},
			{
				component: require("../nb/components/composites/Transitions/SlideComposition"),
				title: "Slide Composition",
				description: "",
			},
			{
				component: require("../nb/components/composites/Transitions/SlideFade"),
				title: "Slide Fade",
				description: "",
			},
			{
				component: require("../nb/components/composites/Transitions/SlideWrapped"),
				title: "Slide Wrapped",
				description: "",
			},
		],
	},
	// VStack: {
	// 	title: "VStack",
	// 	description: "",
	// 	components: [
	// 		// {
	// 		// 	component: require("../nb/components/primitives/VStack/basic"),
	// 		// 	title: "Basic",
	// 		// 	description: "",
	// 		// },
	// 	],
	// },
	ZStack: {
		title: "ZStack",
		description: "",
		basic: require("../components/NativeBaseComponents/ZStack"),
		components: [
			{
				component: require("../nb/components/primitives/ZStack/CenterStack"),
				title: "Center Stack",
				description: "",
			},
			// {
			// 	component: require("../nb/components/primitives/ZStack/example"),
			// 	title: "example",
			// 	description: "",
			// },
		],
	},
};
