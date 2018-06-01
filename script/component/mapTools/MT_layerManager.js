/*
  Copyright © SuperMap. All rights reserved.
  Author: Wang zihao
  E-mail: zihaowang5325@qq.com 
*/

import * as React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import * as Util from '../../util/const_util';

import NavigationService from '../../NavigationService';

import LayerManager_tab from './LayerManager_tab';
import LayerManager_item from './LayerManager_item';

export default class Add_Layer extends React.Component {
  constructor(props) {
    super(props);
    const { state } = this.props.navigation;
    this.workspace = state.params.workspace;
    this.map = state.params.map;
    (async function () {
      let layerCount = await this.map.getLayersCount();
      let layerNameArr = [];
      for (let i = 0; i < layerCount; i++) {
        let layer = await this.map.getLayer(i);
        let name = await layer.getName();
        let map = this.map;
        layerNameArr.push({ key: name, obj: layer, map:map });
      }
      this.setState({
        datasourceList: layerNameArr,
      })
    }).bind(this)();
  }

  state = {
    datasourceList: '',
  }

  _renderItem = ({ item }) => {
    let key = item.key;
    let layer = item.obj;
    let map = item.map;
    return (
      <LayerManager_item layer={layer} name={key} map={map}/>
    );
  }

  /*LayerManager_tab点击方法*/
  //地图切换
  _map_change=()=>{
    NavigationService.navigate('MapChange',{workspace:this.workspace,map:this.map});
  }
  //地图保存
  _map_save=()=>{
    (async function(){
      await this.map.save();
    }).bind(this)()
  }
  //添加数据集
  _add_dataset=()=>{
    NavigationService.navigate('AddDataset',{workspace:this.workspace,map:this.map});
  }

  render() {
    return (
      <View style={styles.container}>
      <LayerManager_tab mapChange={this._map_change} mapSave={this._map_save} addDataset={this._add_dataset}/>
      <FlatList
        data={this.state.datasourceList}
        renderItem={this._renderItem}
        getItemLayout={(data, index) => ( {length: 47, offset: 47 * index, index} )}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Util.USUAL_GREEN,
  },
});