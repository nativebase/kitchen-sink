import React from 'react';
import {
  Box,
  Center,
  Heading,
  Pressable,
  useColorModeValue,
} from 'native-base';
import { StackNavigationProp } from '@react-navigation/stack';
import { mapping } from '../../config/map';

export function StoryBook({
  navigation,
  name,
  colors,
}: {
  navigation: StackNavigationProp<any>;
  name: string;
  colors: [string, string];
}) {
  let Example = mapping[name].basic.Example;
  return (
    <Pressable
      onPress={() =>
        navigation.navigate('component', {
          name: name,
        })
      }
      //   bg="transparent"
      overflow="hidden"
      w="100%"
      bg={useColorModeValue('white', 'blueGray.900')}
    >
      <Box
        bg={{
          linearGradient: {
            colors,
            start: [0, 0],
            end: [0, 1],
          },
        }}
      >
        <Center py={8} px={1} w="100%">
          <Heading size="sm">{name}</Heading>

          <Example />
        </Center>
      </Box>
    </Pressable>
  );
}
