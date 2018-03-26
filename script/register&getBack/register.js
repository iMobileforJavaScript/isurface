/*
  Copyright © SuperMap. All rights reserved.
  Author: Wang zihao
  E-mail: zihaowang5325@qq.com 
*/

import * as React from 'react';
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native';
import * as Util from '../util/const_util';

import BorderInput from './border_input';
import BtnTwo from '../component/BtnTwo';
import CheckBox from '../component/checkBox';

const WIDTH = Util.WIDTH;
const BGCOLOR = Util.USUAL_GREEN

export default class Register extends React.Component {

  _sendMessage = () => {
    console.log('send message');
  }

  _register = () => {
    console.log('register');
  }

  _checkBoxChange = (changed) => {
    console.log('ischecked:' + changed);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.containerView, { marginTop: 70 }]}>
          <BorderInput password={false} placeholder='手机号' />
        </View>
        <View style={styles.containerView}>
          <BorderInput password={false} placeholder='昵称' />
        </View>
        <View style={[styles.containerView, { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: 300 }]}>
          <BorderInput password={false} placeholder='短信验证码' width={190} />
          <BtnTwo text='发送验证码' width={100} size={13} radius={5} btnClick={this._sendMessage} />
        </View>
        <View style={styles.containerView}>
          <BorderInput password={true} placeholder='密码' />
        </View>
        <View style={[styles.containerView, { display: 'flex', flexDirection: 'row', width: 300, alignSelf: 'center' }]}>
          <CheckBox onChange={this._checkBoxChange} />
          <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
            <Text style={{ fontSize: 14 }}> 我已阅读并接受《超图软件用户服务协议》</Text>
          </View>
        </View>
        <View style={[styles.containerView, { marginTop: 50 }]}>
          <BtnTwo text='注册' btnClick={this._register} />
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
  containerView: {
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
  },
});