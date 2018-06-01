/*
  Copyright © SuperMap. All rights reserved.
  Author: Wang zihao
  E-mail: zihaowang5325@qq.com 
*/

import * as React from 'react';
import { View, StyleSheet, TextInput, Text, TouchableHighlight, Platform } from 'react-native';
import * as Util from '../../util/const_util';

import BtnTwo from '../BtnTwo';

export default class DataManager_newDSource extends React.Component {

  _OK = () => {
    console.log('111');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}><Text>数据源名称</Text></View>
        <TextInput style={styles.input}
          underlineColorAndroid='transparent'
          placeholder='请输入数据源名称'
          placeholderTextColor={Util.USUAL_SEPARATORCOLOR}
          onChangeText={(text1) => { this.setState({ name: text1 }) }} />
        <View style={styles.textContainer}><Text>存储路径</Text></View>
        <TextInput style={styles.input}
          underlineColorAndroid='transparent'
          placeholder='请输入存储路径（不填写则使用默认路径）'
          placeholderTextColor={Util.USUAL_SEPARATORCOLOR}
          onChangeText={(text2) => { this.setState({ path: text2 }) }} />
        <BtnTwo text='确定' btnClick={this._OK} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Util.USUAL_GREEN,
    alignItems: 'center',
    paddingTop:10,
  },
  input: {
    width: 0.75 * Util.WIDTH,
    height: 40,
    borderStyle: 'solid',
    borderColor: Util.USUAL_SEPARATORCOLOR,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
    marginBottom: 10,
    ...Platform.select({
      android: {
        padding: 0,
      },
    }),
  },
  textContainer:{
    height:40,
    width:0.75* Util.WIDTH,
  }
});