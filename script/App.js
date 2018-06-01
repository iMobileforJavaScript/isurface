import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

import RootStack from './Stack_Router';
import NavigationService from './NavigationService';

class App extends React.Component {
  render() {
    return (
      <RootStack
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);//设置NavigationService持有stackNvaigation
        }}
      />
    )
  }
}
export default App;