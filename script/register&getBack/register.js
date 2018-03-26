/*
  Copyright © SuperMap. All rights reserved.
  Author: Wang zihao
  E-mail: zihaowang5325@qq.com 
*/

import * as React from 'react';
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native';
import * as Util from '../util/const_util';

import Header from '../component/Header';
import Input from './Input';
import Tips from './Tips';
import TextBtn from '../component/Text_btn';

const WIDTH = Util.WIDTH;
const BGCOLOR = Util.USUAL_GREEN

export default class Login extends React.Component {
  _forgetPassword = () => {
    console.log('forget password');
  }

  _register = () => {
    console.log('register');
  }

  _OK = () => {
    console.log('ok');
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title='我的iSurface' />
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
          <View style={{ alignItems: 'center', }}>
            <Input placeholder='手机号' />
            <Input placeholder='密码' password={true} image={require('../../image/lock.png')} />
            <Tips tipText='地图慧账户可直接登录' btnText='忘记密码' btnClick={this._forgetPassword} />
            <TouchableHighlight style={styles.btn} onPress={this._OK} underlayColor={Util.UNDERLAYCOLOR}><Text style={styles.btn_text}>确定</Text></TouchableHighlight>
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
  },
  btn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 70,
    borderRadius: 20,
    backgroundColor: Util.USUAL_BLUE,
    marginTop: 50,
    marginBottom: 70,
  },
  btn_text: {
    color: 'white',
    fontSize: 17,
  }
});