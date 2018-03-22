/*
  Copyright © SuperMap. All rights reserved.
  Author: Wang zihao
  E-mail: zihaowang5325@qq.com 
*/

import * as React from 'react';
import { StackNavigator } from 'react-navigation';

import MapLoad from './mapLoad/mapLoad';
import HomeMain from './homePage/home';
import Map from './component/Map';

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeMain,
      navigationOptions:{
        header:null,
      }
    },
    MapLoad: {
      screen: MapLoad,
      navigationOptions:{
        headerTitle: '地图加载',
        headerStyle:{backgroundColor:'#2196f3'},
        headerTitleStyle: {alignSelf:'center'},
        headerTintColor: 'white',
      }
    },
    Map: {
      screen: Map,
      navigationOptions:{
        headerStyle:{backgroundColor:'#2196f3'},
        headerTintColor: 'white',
      }
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class RouterHome extends React.Component {
  render() {
    return <RootStack />;
  }
}