import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabNavigator } from 'react-navigation';

import RouterHome from './Router_home';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const FirstRoute = () => <RouterHome/>;
const SecondRoute = () => <View style={[ styles.container, { backgroundColor: '#673ab7' } ]} />;
const ThirdRoute = () => <View style={[ styles.container, { backgroundColor: '#ffffff' } ]} />;

export default TabNavigator({
  首页: {  screen: FirstRoute },
  云服务: { screen: SecondRoute },
  登陆: { screen: ThirdRoute},
  
},{
  tabBarPosition: 'bottom', 
  swipeEnabled: false,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});