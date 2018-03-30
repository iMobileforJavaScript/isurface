/*
  Copyright © SuperMap. All rights reserved.
  Author: Wang zihao
  E-mail: zihaowang5325@qq.com 
*/

import * as React from 'react';
import { StackNavigator } from 'react-navigation';
import * as Util from './util/const_util';

import TabNavi from './Tab_Router';

//主页
import MapLoad from './mapLoad/mapLoad';
import Map from './component/Map';

//我的
import Login from './mine/login';
import Register from './register&getBack/register';
import GetBack from './register&getBack/GetBack';

const headColor = Util.USUAL_BLUE;
const headFontColor = 'white';

const RootStack = StackNavigator(
  {
    Home: {
      screen: TabNavi,
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
        headerTitleStyle: { alignSelf: 'center' },
        headerTintColor: headFontColor,
      }
    },
    Register: {
      screen: Register,
      navigationOptions: {
        headerTitle: '注册',
        headerStyle: { backgroundColor: headColor },
        headerTitleStyle: { alignSelf: 'center' },
        headerTintColor: headFontColor,
      }
    },
    GetBack: {
      screen: GetBack,
      navigationOptions: {
        headerTitle: '找回密码',
        headerStyle: { backgroundColor: headColor },
        headerTitleStyle: { alignSelf: 'center' },
        headerTintColor: headFontColor,
      }
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default RootStack;