/*
  Copyright © SuperMap. All rights reserved.
  Author: Wang zihao
  E-mail: zihaowang5325@qq.com 
*/

import * as React from 'react';
import { View, StyleSheet, Text, TouchableHighlight, FlatList, Image,PixelRatio } from 'react-native';
import * as Util from '../../util/const_util';

import Input from '../Usual_input';
import BtnTwo from '../BtnTwo';

export default class DatarManager_newDSet extends React.Component {

  _OK=()=>{
    console.log('111');
  }

  render() {
    return (
      <View style={styles.container}>
        <Input/>
        <BtnTwo text='确定' btnClick={this._OK} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    backgroundColor:Util.USUAL_GREEN,
  },
});