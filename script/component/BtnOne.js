/*
  Copyright © SuperMap. All rights reserved.
  Author: Wang zihao
  E-mail: zihaowang5325@qq.com 
*/

import * as React from 'react';
import { View, StyleSheet, Image, TouchableHighlight, Text } from 'react-native';
import * as Util from '../util/const_util';

const ICON_HEIGHT = 0.1 * Util.WIDTH;
const ICON_WIDTH = ICON_HEIGHT;
const CONTAINER_HEIGHT = 1.4 * ICON_HEIGHT;
const CONTAINER_WIDTH = CONTAINER_HEIGHT;
const BTN_UNDERCOLOR = Util.UNDERLAYCOLOR;

export default class BtnOne extends React.Component {

  render() {
    return (
      <TouchableHighlight style={styles.container} onPress={this.props.BtnClick} underlayColor={BTN_UNDERCOLOR}>
        <View style={styles.inner}>
          {this.props.BtnImageSrc && <Image style={styles.image} source={this.props.BtnImageSrc} />}
          {this.props.BtnText && <Text style={styles.text}>{this.props.BtnText}</Text>}
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: CONTAINER_HEIGHT,
    width: CONTAINER_WIDTH,
    backgroundColor: 'transparent',
  },
  inner: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
    alignSelf: 'center',
  },
  image: {
    height: ICON_HEIGHT,
    width: ICON_WIDTH,
    alignSelf: 'center',
    borderRadius: 5,
  },
  text: {
    backgroundColor: 'transparent',
    width: CONTAINER_WIDTH,
    textAlign: 'center',
  }
});