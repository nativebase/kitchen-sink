import {} from "../components/NativeBaseComponents/Alert";
const baseUrl = "../nb/components";

export const mapping = {
	Alert: {
		title: "Alert",
		description: "",
		basic: require("../components/NativeBaseComponents/Alert"),
		components: [
			{
				component: require(`${baseUrl}/composites/Alert/basic`),
				title: "Basic",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Alert/action`),
				title: "Action",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Alert/colorScheme`),
				title: "Color Scheme",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Alert/composition`),
				title: "Composition",
				description: "",
			},
			// {
			// 	component: require(`${baseUrl}/composites/Alert/knobEnabled`),
			// 	title: "Knob Enabled",
			// 	description: "",
			// },
			// {
			// 	component: require(`${baseUrl}/composites/Alert/`),
			// 	title: "",
			// 	description: "",
			// },
			{
				component: require(`${baseUrl}/composites/Alert/status`),
				title: "Status",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Alert/variant`),
				title: "Variant",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Alert/usage`),
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
				component: require(`${baseUrl}/composites/Avatar/AvatarBadge`),
				title: "Avatar Badge",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Avatar/AvatarGroup`),
				title: "Avatar Group",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Avatar/Fallback`),
				title: "Fallback",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Avatar/size`),
				title: "Size",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Avatar/usage`),
				title: "Usage",
				description: "",
			},
			// {
			// 	component: require(`${baseUrl}/composites/Avatar/knobEnabled`),
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
				component: require(`${baseUrl}/composites/Badge/color`),
				title: "Color",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Badge/composition`),
				title: "Composition",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Badge/variants`),
				title: "Variants",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Badge/usage`),
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
				component: require(`${baseUrl}/primitives/Button/basic`),
				title: "Basic",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Button/ButtonGroup`),
				title: "ButtonGroup",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Button/Composition`),
				title: "Composition",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Button/icons`),
				title: "Icons",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Button/loading`),
				title: "Loading button",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Button/sizes`),
				title: "Sizes",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Button/variants`),
				title: "variants",
				description: "",
			},
			// {
			// 	component: require(`${baseUrl}/primitives/Button/WithRef`),
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
				component: require(`${baseUrl}/primitives/Box/basic`),
				title: "Basic",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Box/composition-card`),
				title: "Composition Card",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Box/composition-card1`),
				title: "Composition Card 1",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Box/composition-card2`),
				title: "Composition Card 2",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Box/composition-card3`),
				title: "Composition Card 3",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Box/composition-shoes-card`),
				title: "Composition ShoesCard",
				description: "",
			},
		],
	},
	Center: {
		title: "Center",
		description: "",
		components: [
			{
				component: require(`${baseUrl}/composites/Center/Basic`),
				title: "Basic",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Center/SquareCircle`),
				title: "Square Circle",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Center/WithIcons`),
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
				component: require(`${baseUrl}/primitives/Checkbox/basic`),
				title: "Basic",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Checkbox/checkboxGroup`),
				title: "CheckboxGroup",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Checkbox/controlledCheckbox`),
				title: "Controlled Checkbox",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Checkbox/customColor`),
				title: "CustomColor CheckBox",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Checkbox/customIcon`),
				title: "CustomIcon CheckBox",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Checkbox/disabled`),
				title: "Disabled CheckBox",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Checkbox/FormControlled`),
				title: "FormControlled CheckBox",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Checkbox/invalid`),
				title: "Invalid CheckBox",
				description: "",
			},
			// {
			// 	component: require(`${baseUrl}/primitives/Checkbox/playground`),
			// 	title: "CheckBox",
			// 	description: "",
			// },
			{
				component: require(`${baseUrl}/primitives/Checkbox/size`),
				title: "CheckBox",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Checkbox/uncontrolledCheckbox`),
				title: "CheckBox",
				description: "",
			},
			// {
			// 	component: require(`${baseUrl}/primitives/Checkbox/withRef`),
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
				component: require(`${baseUrl}/primitives/Column/Basic`),
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
				component: require(`${baseUrl}/composites/Divider/Basic`),
				title: "Basic",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Divider/Composition`),
				title: "Composition",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Divider/Orientation`),
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
				component: require(`${baseUrl}/composites/Fab/Basic`),
				title: "Basic",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Fab/CustomPosition`),
				title: "Custom Position",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Fab/Placement`),
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
				component: require(`${baseUrl}/primitives/Flex/basic`),
				title: "Basic",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Flex/spacer`),
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
				component: require(`${baseUrl}/primitives/Heading/Basic`),
				title: "Basic",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Heading/Composition`),
				title: "Composition",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Heading/OverridenStyle`),
				title: "OverridenStyle",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Heading/Sizes`),
				title: "Sizes",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Heading/Truncate`),
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
				component: require(`${baseUrl}/primitives/HStack/basic`),
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
				component: require(`${baseUrl}/primitives/Icon/AllIcons`),
				title: "Basic",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Icon/Basic`),
				title: "Basic",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Icon/CreateIcon`),
				title: "Basic",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Icon/CustomIcon`),
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
				component: require(`${baseUrl}/composites/IconButton/Basic`),
				title: "Basic",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/IconButton/Sizes`),
				title: "Sizes",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/IconButton/SVGIcon`),
				title: "SVGIcon",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/IconButton/Variant`),
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
				component: require(`${baseUrl}/primitives/Image/Basic`),
				title: "Basic",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Image/BorderRadius`),
				title: "BorderRadius",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Image/FallbackSupport`),
				title: "FallbackSupport",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Image/Sizes`),
				title: "Sizes",
				description: "",
			},
			// {
			// 	component: require(`${baseUrl}/primitives/Image/WithRef`),
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
				component: require(`${baseUrl}/primitives/Input/Basic`),
				title: "Basic Input",
				description: "",
			},
			// {
			// 	component: require(`${baseUrl}/primitives/Input/Controlled`),
			// 	title: "Controlled Input",
			// 	description: "",
			// },
			{
				component: require(`${baseUrl}/primitives/Input/Elements`),
				title: "Elements",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Input/FormControlled`),
				title: "FormControlled",
				description: "",
			},
			// {
			// 	component: require(`${baseUrl}/primitives/Input/Masked`),
			// 	title: "Masked",
			// 	description: "",
			// },
			{
				component: require(`${baseUrl}/primitives/Input/Size`),
				title: "Size",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Input/Variant`),
				title: "Variant",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Input/Addons`),
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
				component: require(`${baseUrl}/primitives/Link/Basic`),
				title: "Basic",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Link/CompositeLink`),
				title: "Composite Link",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Link/CustomOnPress`),
				title: "Custom Pressable link",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Link/ExternalLink`),
				title: "External link",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Link/UnderlineLink`),
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
				component: require(`${baseUrl}/primitives/List/Basic`),
				title: "Basic",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/List/OrderedList`),
				title: "Ordered list",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/List/UnorderedList`),
				title: "Unordered list",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/List/ListWithIcon`),
				title: "ListWithIcon",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/List/PressableList`),
				title: "Pressable list",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/List/StylingList`),
				title: "Styling list",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/List/VirtualizedList`),
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
				component: require(`${baseUrl}/composites/Menu/Basic`),
				title: "Basic",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Menu/Group`),
				title: "Menu Group",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Menu/MenuOptionsGroup`),
				title: "Menu options Group",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Menu/MenuPositions`),
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
				component: require(`${baseUrl}/composites/Modal/Basic`),
				title: "Basic",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Modal/ModalPlacement`),
				title: "ModalPlacement",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Modal/ModalRefEg`),
				title: "Modal Ref",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Modal/ModalWithAvoidKeyboard`),
				title: "Avoiding keyboard with Modal ",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Modal/MultipleModal`),
				title: "Multiple Modal",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Modal/Size`),
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
				component: require(`${baseUrl}/composites/Popover/Basic`),
				title: "Basic",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Popover/PopoverPositions`),
				title: "Popover Positions",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Popover/RefEg`),
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
				component: require(`${baseUrl}/composites/Progress/Basic`),
				title: "Basic",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Progress/ColorScheme`),
				title: "Color schemes",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Progress/Composition`),
				title: "Composition",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Progress/CustomBgColor`),
				title: "Custom BgColor",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Progress/Flat`),
				title: "Flat",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Progress/Sizes`),
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
				component: require(`${baseUrl}/primitives/Radio/controlledRadio`),
				title: "Controlled Radio",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Radio/formControlled`),
				title: "Form Controlled",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Radio/uncontrolledRadio`),
				title: "Uncontrolled Radio",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Radio/customColor`),
				title: "Custom Color",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Radio/customIcon`),
				title: "Custom con",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Radio/disabled`),
				title: "Disabled",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Radio/invalid`),
				title: "Invalid",
				description: "",
			},
			// {
			// 	component: require(`${baseUrl}/primitives/Radio/playground`),
			// 	title: "Playground",
			// 	description: "",
			// },
			{
				component: require(`${baseUrl}/primitives/Radio/size`),
				title: "Size",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Radio/withRef`),
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
				component: require(`${baseUrl}/primitives/Select/Basic`),
				title: "Basic",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Select/FormControlled`),
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
				component: require(`${baseUrl}/primitives/Slider/color`),
				title: "Color",
				description: "",
			},
			// {
			// 	component: require(`${baseUrl}/primitives/Slider/Customized`),
			// 	title: "Customized",
			// 	description: "",
			// },
			{
				component: require(`${baseUrl}/primitives/Slider/FormControlled`),
				title: "Form Controlled",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Slider/Size`),
				title: "Size",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Slider/Value`),
				title: "Value",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Slider/Vertical`),
				title: "Vertical",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Slider/usage`),
				title: "Usage",
				description: "",
			},
			// {
			// 	component: require(`${baseUrl}/primitives/Slider/Playground`),
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
				component: require(`${baseUrl}/primitives/Spinner/color`),
				title: "Color",
				description: "",
			},
			// {
			// 	component: require(`${baseUrl}/primitives/Spinner/duration`),
			// 	title: "Duration",
			// 	description: "",
			// },
			{
				component: require(`${baseUrl}/primitives/Spinner/size`),
				title: "Size",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Spinner/usage`),
				title: "Usage",
				description: "",
			},
			// {
			// 	component: require(`${baseUrl}/primitives/Spinner/variant`),
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
				component: require(`${baseUrl}/primitives/Switch/Basic`),
				title: "Basic",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Switch/Accessibility`),
				title: "Accessibility",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Switch/ColorSchemes`),
				title: "Color Schemes",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Switch/Sizes`),
				title: "Sizes",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Switch/SwitchBgColor`),
				title: "Switch BgColor",
				description: "",
			},
			// {
			// 	component: require(`${baseUrl}/primitives/Switch/example`),
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
				component: require(`${baseUrl}/composites/Tabs/Colors`),
				title: "Colored Tabs",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Tabs/Composition`),
				title: "Composition",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Tabs/Controlled`),
				title: "Controlled Tabs",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Tabs/FittedTab`),
				title: "Fitted Tab",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Tabs/IconTabs`),
				title: "Icon Tabs",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Tabs/Size`),
				title: "Sizes",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Tabs/TabAlignment`),
				title: "Tab Alignment",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Tabs/TabBarOnly`),
				title: "Tab Bar Only",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Tabs/Usage`),
				title: "Usage",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Tabs/Variants`),
				title: "Variants",
				description: "",
			},
		],
	},
	Text: {
		title: "Text",
		description: "",
		components: [
			{
				component: require(`${baseUrl}/primitives/Text/Basic`),
				title: "Basic",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Text/ChangingFontSize`),
				title: "Changing Font Size",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Text/Nested`),
				title: "Nested texts",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Text/Overriden`),
				title: "Overriden Text",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/Text/Truncated`),
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
				component: require(`${baseUrl}/primitives/TextArea/basic`),
				title: "Basic",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/TextArea/invalid`),
				title: "Invalid",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/TextArea/size`),
				title: "Size",
				description: "",
			},
			{
				component: require(`${baseUrl}/primitives/TextArea/value`),
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
				component: require(`${baseUrl}/composites/Toast/Basic`),
				title: "Basic",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Toast/CloseToast`),
				title: "Close Toast",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Toast/CustomComponent`),
				title: "Custom Component",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Toast/PreventDuplicate`),
				title: "Prevent Duplicate",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Toast/ToastPositions`),
				title: "Toast Positions",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Toast/ToastStatus`),
				title: "Toast Status",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Toast/ToastVariants`),
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
				component: require(`${baseUrl}/composites/Tooltip/Basic`),
				title: "Basic",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Tooltip/CustomTooltip`),
				title: "Custom Tooltip",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Tooltip/TooltipPositions`),
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
				component: require(`${baseUrl}/composites/Transitions/Fade`),
				title: "Fade",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Transitions/ScaleFade`),
				title: "ScaleFade",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Transitions/Slide`),
				title: "Slide",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Transitions/SlideComposition`),
				title: "Slide Composition",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Transitions/SlideFade`),
				title: "Slide Fade",
				description: "",
			},
			{
				component: require(`${baseUrl}/composites/Transitions/SlideWrapped`),
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
	// 		// 	component: require(`${baseUrl}/primitives/VStack/basic`),
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
				component: require(`${baseUrl}/primitives/ZStack/CenterStack`),
				title: "Center Stack",
				description: "",
			},
			// {
			// 	component: require(`${baseUrl}/primitives/ZStack/example`),
			// 	title: "example",
			// 	description: "",
			// },
		],
	},
};
