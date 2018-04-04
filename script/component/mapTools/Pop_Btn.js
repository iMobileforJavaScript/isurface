/*
  Copyright © SuperMap. All rights reserved.
  Author: Wang zihao
  E-mail: zihaowang5325@qq.com 
*/

import * as React from 'react';
import { View, StyleSheet, Image, TouchableHighlight, Text } from 'react-native';
import * as Util from '../../util/const_util';

const ICON_HEIGHT =0.75* 0.1 * Util.WIDTH;
const ICON_WIDTH = ICON_HEIGHT;
const CONTAINER_HEIGHT = 1.4 * ICON_HEIGHT;
const CONTAINER_WIDTH = CONTAINER_HEIGHT;
const BTN_UNDERCOLOR = Util.UNDERLAYCOLOR;

export default class Pop_Btn extends React.Component {

  render() {
    return (
      <TouchableHighlight style={styles.container} onPress={this.props.btnClick} underlayColor={BTN_UNDERCOLOR}>
        <View style={styles.inner}>
          {this.props.BtnText && <Text style={styles.text}>{this.props.BtnText}</Text>}
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: CONTAINER_HEIGHT-10,
    width: CONTAINER_WIDTH+10,
    backgroundColor: 'white',
    marginTop:5,
    marginBottom:5,
    borderStyle: 'solid',
    borderColor: Util.USUAL_SEPARATORCOLOR,
    borderWidth: 1,
    borderRadius: 10,
  },
  inner: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent:'center',
  },
  text: {
    backgroundColor: 'transparent',
    width: CONTAINER_WIDTH+10,
    textAlign: 'center',
  }
});