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

  _map_change=()=>{
    if(typeof this.props.mapChange =='function'){
      this.props.mapChange();
    }
  }

  _map_save=()=>{
    if(typeof this.props.mapSave == 'function'){
      this.props.mapSave();
    }
  }

  _add_dataset=()=>{
    if(typeof this.props.addDataset =='function'){
      this.props.addDataset();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <BtnOne BtnText='添加数据集' BtnImageSrc={require('../../../image/add_dataset.png')} BtnClick={this._add_dataset}/>
        <BtnOne BtnText='保存' BtnImageSrc={require('../../../image/save.png')} BtnClick={this._map_save}/>
        <BtnOne BtnText='地图切换' BtnImageSrc={require('../../../image/map_change.png')} BtnClick={this._map_change}/>
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