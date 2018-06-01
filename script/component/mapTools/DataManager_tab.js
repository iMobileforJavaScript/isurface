/*
  Copyright © SuperMap. All rights reserved.
  Author: Wang zihao
  E-mail: zihaowang5325@qq.com 
*/

import * as React from 'react';
import { View, StyleSheet, Text, TouchableHighlight, FlatList, Image,PixelRatio } from 'react-native';
import * as Util from '../../util/const_util';

import BtnOne from '../BtnOne';

export default class DatarManager_tab extends React.Component {

  _new_datasource=()=>{
    if(typeof this.props.dSource =='function'){
      this.props.dSource();
    }
  }

  _new_dataset=()=>{
    if(typeof this.props.dSet == 'function'){
      this.props.dSet();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <BtnOne BtnText='新建数据源' BtnImageSrc={require('../../../image/add_dataset.png')} BtnClick={this._new_datasource}/>
        <BtnOne BtnText='新建数据集' BtnImageSrc={require('../../../image/add_layer.png')} BtnClick={this._new_dataset}/>
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
    backgroundColor:'white',
    borderStyle:'solid',
    borderTopWidth:0,
    borderLeftWidth:0,
    borderRightWidth:0,
    borderBottomWidth:1,
    borderColor:'#bbbbbb',
    justifyContent:'space-around',
  },
});