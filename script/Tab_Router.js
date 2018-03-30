import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabNavigator } from 'react-navigation';

import HomeMain from './homePage/home';
import Login from './mine/login';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const FirstRoute = () => <HomeMain />;
const SecondRoute = () => <View style={{flex:1, backgroundColor: '#ffffff' }} />;
const ThirdRoute = () => <Login />;

const TabNavi = TabNavigator({
  首页: { screen: FirstRoute },
  云服务: { screen: SecondRoute },
  登陆: { screen: ThirdRoute },

}, {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
  });

export default TabNavi;
