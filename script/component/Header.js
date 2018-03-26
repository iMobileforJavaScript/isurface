/*
  Copyright © SuperMap. All rights reserved.
  Author: Wang zihao
  E-mail: zihaowang5325@qq.com 
*/

import * as React from 'react';
import { View, StyleSheet, Dimensions, Image, TouchableHighlight, Text } from 'react-native';
import * as Util from '../util/const_util';

const WIDTH = Util.WIDTH;

export default class Header extends React.Component {

  render() {
    const title = this.props.title ? this.props.title : 'header'
    return (
      <View style={styles.header}>
        <Text style={styles.text}>{title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: Util.HEADER_HEIGHT,
    width: WIDTH,
    backgroundColor: Util.HEADER_COLOR,
  },
  text: {
    color: 'white',
    fontSize: 23,
  }
});