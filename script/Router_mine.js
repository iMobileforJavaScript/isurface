/*
  Copyright © SuperMap. All rights reserved.
  Author: Wang zihao
  E-mail: zihaowang5325@qq.com 
*/

import * as React from 'react';
import { StackNavigator } from 'react-navigation';
import * as Util from './util/const_util';

import Login from './mine/login';
import Register from './register&getBack/register';

const headColor = Util.USUAL_BLUE;
const headFontColor = 'white';

const RootStack3 = StackNavigator(
  {
    Home: {
      screen: Login,
      navigationOptions: {
        header: null
      }
    },
    Register: {
      screen: Register,
      navigationOptions: {
        headerTitle: '我的iSurface',
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

export default class RouterMine extends React.Component {
  render() {
    return <RootStack3 />;
  }
}