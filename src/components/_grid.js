import React from 'react';
import {StyleSheet} from 'react-native';
import {Layout} from 'react-native-ui-kitten';

export const Container = ({style, children, ...props}) => (
  <Layout style={{..._grid.container, ...style}} {...props}>
    {children}
  </Layout>
);

export const Row = ({style, children, ...props}) => (
  <Layout style={{..._grid.row, ...style}} {...props}>
    {children}
  </Layout>
);

export const Col = ({size, style, children, ...props}) => (
  <Layout
    style={{
      ..._grid.col,
      flexBasis: size ? `${(size / 12) * 100}%` : '100%',
      maxWidth: size ? `${(size / 12) * 100}%` : '100%',
      ...style,
    }}
    {...props}>
    {children}
  </Layout>
);

const _grid = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    flex: 1,
    maxWidth: '100%',
    flexBasis: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: -15,
    marginRight: -15,
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    backgroundColor: 'transparent',
  },
  col: {
    padding: 15,
    flex: 1,
    backgroundColor: 'transparent',
  },
});
