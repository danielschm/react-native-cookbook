import * as React from 'react';
import { StyleSheet } from 'react-native';

import {View, Separator, Container} from '../components/Layout';
import { Text } from '../components/Basic';

export default function HomeScreen() {
  return (
    <Container>
      <Text>Tab One</Text>
      <Separator/>
    </Container>
  );
}

