import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { BaseTheme } from './src/theme';
import config from './nativebase.config';
import { Root } from './src/components/RootComponent';

export default function App() {
	return (
		<NativeBaseProvider theme={BaseTheme} config={config}>
			<Root />
		</NativeBaseProvider>
	);
}
