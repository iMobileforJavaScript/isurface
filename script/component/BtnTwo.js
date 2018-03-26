/*
  Copyright © SuperMap. All rights reserved.
  Author: Wang zihao
  E-mail: zihaowang5325@qq.com 
*/

import * as React from 'react';
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native';
import * as Util from '../util/const_util';

const bgColor = Util.USUAL_BLUE;
const fontColor = 'white';

export default class BtnTwo extends React.Component {

  _defaultPress = () => {
    console.log('btnTwo press');
  }

  render() {
    const text = this.props.text ? this.props.text : '默认按钮';
    const width = this.props.width ? { width: this.props.width } : { width: 70 };
    const radius = this.props.radius ? { borderRadius: this.props.radius } : { borderRadius: 20 };
    const press = this.props.btnClick ? this.props.btnClick : this._defaultPress;
    const size = this.props.size ? this.props.size : 17;
    return (
      <TouchableHighlight style={[styles.btn, width, radius]} onPress={press} underlayColor={Util.UNDERLAYCOLOR}>
        <Text style={[styles.btn_text, { fontSize: size }]}>{text}</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 70,
    borderRadius: 20,
    backgroundColor: bgColor,
  },
  btn_text: {
    color: fontColor,
    fontSize: 17,
  },
});