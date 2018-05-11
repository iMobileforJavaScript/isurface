/*
  Copyright © SuperMap. All rights reserved.
  Author: Wang zihao
  E-mail: zihaowang5325@qq.com 
*/

import * as React from 'react';
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';
import * as Util from '../util/const_util';

import NavigationService from '../NavigationService';   //导航模块
import Header from '../component/Header';
import Input from './Input';
import Tips from './Tips';
import TextBtn from '../component/Text_btn';
import BtnTwo from '../component/BtnTwo';

const WIDTH = Util.WIDTH;
const BGCOLOR = Util.USUAL_GREEN

export default class Login extends React.Component {
  _forgetPassword = () => {
    NavigationService.navigate('GetBack');
  }

  _register = () => {
    NavigationService.navigate('Register');
  }

  _OK = () => {
    console.log('ok');
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title='iTablet登录' />
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
          <View style={{ alignItems: 'center', }}>
            <Input placeholder='手机号' />
            <Input placeholder='密码' password={true} image={require('../../image/lock.png')} />
            <Tips tipText='地图慧账户可直接登录' btnText='忘记密码' btnClick={this._forgetPassword} />
            <View style={{ marginTop: 50, marginBottom: 70 }}>
              <BtnTwo text='确定' btnClick={this._OK} />
            </View>
            <TextBtn width={150} height={40} btnText='没有账户立即注册' btnClick={this._register} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BGCOLOR,
  }
});