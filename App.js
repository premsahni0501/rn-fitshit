import React from 'react';
import {StatusBar} from 'react-native';
import AppStack from './src/AppNavigator';
import {mapping, light as lightTheme} from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from 'react-native-ui-kitten';
import {default as customMapping} from './custom-mapping.json';
import {
  MaterialIconsPack,
  FeatherIconsPack,
  EntypoIconsPack,
} from './src/components/IconsPack';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <IconRegistry
        icons={[MaterialIconsPack, FeatherIconsPack, EntypoIconsPack]}
      />
      <ApplicationProvider
        mapping={mapping}
        customMapping={customMapping}
        theme={lightTheme}>
        <AppStack />
      </ApplicationProvider>
    </>
  );
};

export default App;
