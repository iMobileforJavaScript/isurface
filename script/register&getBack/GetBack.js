/*
  Copyright © SuperMap. All rights reserved.
  Author: Wang zihao
  E-mail: zihaowang5325@qq.com 
*/

import * as React from 'react';
import { View, StyleSheet, TextInput, Image, Platform, TouchableHighlight } from 'react-native';
import * as Util from '../util/const_util';

import BorderInput from './border_input';
import BtnTwo from '../component/BtnTwo';

const BGCOLOR = Util.USUAL_GREEN;
const DEFAULTWIDTH = 300;

export default class GetBack extends React.Component {

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.elementContainer}>
          <BorderInput placeholder='手机号' />
          <View style={styles.message}>
            <BorderInput password={false} placeholder='短信验证码' width={190} />
            <BtnTwo text='发送验证码' width={100} size={13} radius={5} btnClick={this._sendMessage} />
          </View>
          <BorderInput password={true} placeholder='新密码' />
          <BorderInput password={true} placeholder='确认密码' />
          <BtnTwo text='找回密码' width={90} btnClick={this._register} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BGCOLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  elementContainer: {
    height: 0.4 * Util.HEIGHT,
    width: DEFAULTWIDTH,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  message: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: DEFAULTWIDTH,
  },
});