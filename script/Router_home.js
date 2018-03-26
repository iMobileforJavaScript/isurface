/*
  Copyright © SuperMap. All rights reserved.
  Author: Wang zihao
  E-mail: zihaowang5325@qq.com 
*/

import * as React from 'react';
import { StackNavigator } from 'react-navigation';
import * as Util from './util/const_util';

import MapLoad from './mapLoad/mapLoad';
import HomeMain from './homePage/home';
import Map from './component/Map';

const headColor = Util.USUAL_BLUE;
const headFontColor = 'white';

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeMain,
      navigationOptions: {
        header: null,
      }
    },
    MapLoad: {
      screen: MapLoad,
      navigationOptions: {
        headerTitle: '地图加载',
        headerStyle: { backgroundColor: headColor },
        headerTitleStyle: { alignSelf: 'center' },
        headerTintColor: headFontColor,
      }
    },
    Map: {
      screen: Map,
      navigationOptions: {
        headerStyle: { backgroundColor: headColor },
        headerTintColor: headFontColor,
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