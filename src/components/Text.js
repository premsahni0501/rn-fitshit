import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-ui-kitten';

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Nunito',
  },
});
export const TextEl = ({style, children, ...props}) => (
  <Text {...props} style={{...style, ...styles.text}}>
    {children}
  </Text>
);
