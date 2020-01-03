import React from 'react';
import {StatusBar, Text} from 'react-native';
import AppStack from './src/AppNavigator';
import {mapping, light as lightTheme} from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from 'react-native-ui-kitten';
import {default as customMapping} from './custom-mapping.json';
import {
  MaterialIconsPack,
  FeatherIconsPack,
  EntypoIconsPack,
} from './src/components/IconsPack';
import Fitness from '@ovalmoney/react-native-fitness';

const App = () => {
  let authRes = false;
  Fitness.isAuthorized()
    .then(authResult => {
      console.log('authResult', authResult);
      authRes = authResult;
    })
    .catch(() => {
      authRes = false;
    });
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="red" />
      <IconRegistry
        icons={[MaterialIconsPack, FeatherIconsPack, EntypoIconsPack]}
      />
      <ApplicationProvider
        mapping={mapping}
        customMapping={customMapping}
        theme={lightTheme}>
        {!authRes ? <AppStack /> : <Text>Please Allow</Text>}
      </ApplicationProvider>
    </>
  );
};

export default App;
