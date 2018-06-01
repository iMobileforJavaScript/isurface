/*
  Copyright © SuperMap. All rights reserved.
  Author: Wang zihao
  E-mail: zihaowang5325@qq.com 
*/

import * as React from 'react';
import { View, StyleSheet, Image, TouchableHighlight, Text } from 'react-native';
import * as Util from '../../util/const_util';

export default class LayerManager_bottomItem extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.btn}><Text>可捕捉</Text></TouchableHighlight>
        <TouchableHighlight style={styles.btn}><Text>专题图</Text></TouchableHighlight>
        <TouchableHighlight style={styles.btn}><Text>风格</Text></TouchableHighlight>
        <TouchableHighlight style={styles.btn}><Text>重命名</Text></TouchableHighlight>
        <TouchableHighlight style={styles.btn}><Text>移除</Text></TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height:45,
    width:Util.WIDTH,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems: 'center',
    backgroundColor:'white',
    borderColor:Util.USUAL_SEPARATORCOLOR,
    borderTopWidth:1,
    borderLeftWidth:0,
    borderRightWidth:0,
    borderBottomWidth:0,
    borderStyle:'solid'
  },
  btn: {
    height:40,
    width:70, 
    borderWidth:1,
    borderStyle:'solid',
    borderRadius:5,
    borderColor:Util.USUAL_SEPARATORCOLOR,
    marginLeft:7,
    marginRight:7,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:Util.USUAL_GREEN
  }
});