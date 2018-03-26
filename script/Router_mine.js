/*
  Copyright © SuperMap. All rights reserved.
  Author: Wang zihao
  E-mail: zihaowang5325@qq.com 
*/

import * as React from 'react';
import { StackNavigator } from 'react-navigation';
import * as Util from './util/const_util';

import Login from './mine/login';
import Map from './component/Map';

const RootStack3 = StackNavigator(
  {
    Home: {
      screen: Login,
      navigationOptions: {
        header: null
      }
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class RouterMine extends React.Component {
  render() {
    return <RootStack3 />;
  }
}