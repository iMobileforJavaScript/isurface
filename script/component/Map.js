/*
  Copyright © SuperMap. All rights reserved.
  Author: Wang zihao
  E-mail: zihaowang5325@qq.com 
*/

import * as React from 'react';
import { View, StyleSheet, Platform, Geolocation } from 'react-native';
import { Workspace, SMMapView, Utility, Point2D } from 'imobile_for_reactnative';

import MT_BtnList from './mapTools/MT_BtnList';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    const { state } = this.props.navigation
    switch (state.params.type) {  //state.params.type最好进行判定
      case 'TD':
        this.DSParams = { server: 'http://t0.tianditu.com/vec_w/wmts', engineType: 23, driver: 'WMTS', alias: 'baseMap' };
        this.labelDSParams = { server: 'http://t0.tianditu.com/cva_w/wmts', engineType: 23, driver: 'WMTS', alias: 'label' };
        this.layerIndex = 0;
        break;
      case 'Baidu':
        this.DSParams = { server: 'http://www.baidu.com', engineType: 227 };
        this.labelDSParams = false;
        this.layerIndex = 0;
        break;
      case 'Google':
        this.DSParams = { server: 'http://www.google.cn/maps', engineType: 223 };
        this.labelDSParams = false;
        this.layerIndex = 'roadmap';
        break;
      case 'OSM':
        this.DSParams = { server: 'http://openstreetmap.org', engineType: 228 };
        this.labelDSParams = false;
        this.layerIndex = 0;
        break;
      default:
        this.DSParams = { server: 'http://openstreetmap.org', engineType: 228 };
        this.labelDSParams = false;
        this.layerIndex = 0;
    }
  }

  _onGetInstance = (mapView) => {
    this.mapView = mapView;
    this._addMap();
  }

  render() {
    const testData = [{ key: '添加图层', image: require('../../image/add_layer.png') },
    { key: '数据采集', image: require('../../image/data_collect.png') },
    { key: '图层管理', image: require('../../image/layer_control.png') },
    { key: '数据分析', image: require('../../image/analyst.png') },
    { key: '小工具', image: require('../../image/tools.png') }];
    return (
      <View style={styles.container}>
        <SMMapView style={styles.map} onGetInstance={this._onGetInstance} />
        <MT_BtnList data={testData}/>
      </View>
    );
  }

  _addMap = () => {
    const workspaceModule = new Workspace();
    const point2dModule = new Point2D();
    (async function () {
      this.workspace = await workspaceModule.createObj();
      this.mapControl = await this.mapView.getMapControl();
      this.map = await this.mapControl.getMap();
      await this.map.setWorkspace(this.workspace);

      await this.map.setScale(0.0001);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          let lat = position.coords.latitude;
          let lon = position.coords.longitude;
          (async () => {
            let centerPoint = await point2dModule.createObj(lon, lat);
            await this.map.setCenter(centerPoint);
            await this.map.refresh();
          }).bind(this)();
        }
      );

      let dsBaseMap = await this.workspace.openDatasource(this.DSParams);
      await this.map.addLayer(await dsBaseMap.getDataset(this.layerIndex), true);
      if (this.labelDSParams) {
        let dsLabel = await this.workspace.openDatasource(this.labelDSParams);
        await this.map.addLayer(await dsLabel.getDataset(this.layerIndex), true);
      }
    }).bind(this)();
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
    alignSelf: 'stretch',
  },
});