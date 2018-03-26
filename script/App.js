import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabNavigator } from 'react-navigation';

import RouterHome from './Router_home';
import RouterMine from './Router_mine';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const FirstRoute = () => <RouterHome />;
const SecondRoute = () => <View style={[styles.container, { backgroundColor: '#ffffff' }]} />;
const ThirdRoute = () => <RouterMine />;

export default TabNavigator({
  首页: { screen: FirstRoute },
  云服务: { screen: SecondRoute },
  登陆: { screen: ThirdRoute },

}, {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
  });

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});