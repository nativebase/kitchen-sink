import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  Box,
  Button,
  Column,
  Row,
  useColorMode,
  Center,
  Heading,
  HStack,
  Text,
  useBreakpointValue,
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { mapping } from '../../config/map';
import { ScrollView, StatusBar } from 'react-native';
import { MasonMobile } from '../../components/MasonLayout/mobile';
import { MasonWeb } from '../../components/MasonLayout/web';

export function MasonLayout({
  navigation,
}: {
  navigation: StackNavigationProp<any>;
}) {
  const { colorMode, toggleColorMode } = useColorMode();

  const isLargeScreen = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
  });

  return (
    <Box safeAreaTop flex={1} bg="gray.800">
      <StatusBar
        barStyle="light-content"
        translucent={false}
        backgroundColor="#27272a"
      />
      <HStack
        px={2}
        backgroundColor=""
        borderRadius="lg"
        m={2}
        bg="gray.800"
        space={2}
      >
        <Heading color="white">NativeBase</Heading>
        <Text color="white" alignSelf="flex-end" lineHeight={7}>
          v3.0
        </Text>
      </HStack>
      <ScrollView contentContainerStyle={{ width: '100%' }}>
        {isLargeScreen ? (
          <MasonWeb navigation={navigation} />
        ) : (
          <MasonMobile navigation={navigation} />
        )}
      </ScrollView>
    </Box>
  );
}
