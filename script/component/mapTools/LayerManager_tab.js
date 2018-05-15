/*
  Copyright © SuperMap. All rights reserved.
  Author: Wang zihao
  E-mail: zihaowang5325@qq.com 
*/

import * as React from 'react';
import { View, StyleSheet, Text, TouchableHighlight, FlatList, Image,PixelRatio } from 'react-native';
import * as Util from '../../util/const_util';

import BtnOne from '../BtnOne';

export default class LayerManager_item extends React.Component {

  _testClick=()=>{
    console.log('12345');
  }

  render() {
    return (
      <View style={styles.container}>
        <BtnOne BtnText='添加数据集' BtnImageSrc={require('../../../image/add_dataset.png')} BtnClick={this._testClick}/>
        <BtnOne BtnText='保存' BtnImageSrc={require('../../../image/save.png')} BtnClick={this._testClick}/>
        <BtnOne BtnText='地图切换' BtnImageSrc={require('../../../image/map_change.png')} BtnClick={this._testClick}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    height:0.14*Util.WIDTH,
    width:Util.WIDTH,
    flexDirection:'row',

  },
});