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

const DEFAULTWIDTH = 300;
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
        <View style={styles.containerView}>
          <BorderInput password={false} placeholder='手机号' />
          <BorderInput password={false} placeholder='昵称' />
          <View style={styles.message}>
            <BorderInput password={false} placeholder='短信验证码' width={190} />
            <BtnTwo text='发送验证码' width={100} size={13} radius={5} btnClick={this._sendMessage} />
          </View>
          <BorderInput password={true} placeholder='密码' />
          <View style={styles.checkbox}>
            <CheckBox onChange={this._checkBoxChange} />
            <View style={styles.checkboxTextContainer}>
              <Text style={styles.font}> 我已阅读并接受《超图软件用户服务协议》</Text>
            </View>
          </View>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerView: {
    height: 0.45 * Util.HEIGHT,
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
  checkbox: {
    display: 'flex',
    flexDirection: 'row',
    width: DEFAULTWIDTH,
    alignSelf: 'center'
  },
  checkboxTextContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  font: {
    fontSize: 14,
  }
});