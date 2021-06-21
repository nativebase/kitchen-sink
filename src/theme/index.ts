import { extendTheme } from 'native-base';

export const BaseTheme = extendTheme({
	components: {
		Text: {
			defaultProps: {
				fontSize: 'lg',
			},
		},
	},
	colors: {
		slateGray: {
			50: '#f3f2f2',
			100: '#d8d8d8',
			200: '#bebebe',
			300: '#a3a3a3',
			400: '#898989',
			500: '#6f6f6f',
			600: '#565656',
			700: '#3e3e3e',
			800: '#252525',
			900: '#0d0c0d',
		},
	},
	Pressable: {
		cursor: 'pointer',
	},

	config: {
		// Changing initialColorMode to 'dark'
		initialColorMode: 'dark',
	},
});
