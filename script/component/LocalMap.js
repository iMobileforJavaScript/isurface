/*
  Copyright © SuperMap. All rights reserved.
  Author: Wang zihao
  E-mail: zihaowang5325@qq.com 
*/

import * as React from 'react';
import { View, StyleSheet, Platform, Geolocation } from 'react-native';
import { Workspace, SMMapView, Utility, Point2D, Action } from 'imobile_for_reactnative';

import * as Util from '../util/const_util';
import Pop_MeasureBar from './mapTools/Pop_MeasureBar';
import Pop_BtnList from './mapTools/Pop_BtnList';
import MT_BtnList from './mapTools/MT_BtnList';

export default class LocalMap extends React.Component {
  constructor(props) {
    super(props);
    const { state } = this.props.navigation
    //state.params.XX
    this.PATH = state.params.path;
  }

  state = {
    popShow: false,
    popType: '',
    measureShow: false,
    measureResult: 0,
  }

  _onGetInstance = (mapView) => {
    this.mapView = mapView;
    this._addMap();
  }

  _toolsClickTest = () => {
    console.log('12345');
  }

  _pop_list = (show, type) => {//底部BtnBar事件点击回掉，负责底部二级pop的弹出
    this.setState(previousState => {
      return { popShow: show, popType: type, };
    });
  }

  //二级pop按钮点击事件函数
  _pop_measure_click = (show) => {
    this.setState(previousState => {
      return { measureShow: show };
    });
    this._add_measure_listener();// to do list:优化，不需每次都添加listener
  }

  /*测量功能模块*/

  _add_measure_listener = async () => {
    await this.mapControl.addMeasureListener({
      lengthMeasured: this._measure_callback,
      areaMeasured: this._measure_callback,
    });
  }

  _measure_callback = (e) => {
    let result = e.curResult;
    this.setState({
      measureResult: result,
    });
  }

  _remove_measure_listener = async () => {
    await this.mapControl.removeMeasureListener();
  }

  _measure_line = async () => {
    await this.mapControl.setAction(Action.MEASURELENGTH);
  }

  _measure_square = async () => {
    await this.mapControl.setAction(Action.MEASUREAREA);
  }

  _measure_pause = async () => {
    await this.mapControl.setAction(Action.PAN);
    this.setState({
      measureResult: 0,
    });
  }

  _closeMeasureMode = async () => {
    await this.mapControl.setAction(Action.PAN);
    this._remove_measure_listener();
  }
  /*测量功能模块到此截止*/

  render() {
    return (
      <View style={styles.container}>
        <SMMapView style={styles.map} onGetInstance={this._onGetInstance} />
        {this.state.measureShow && <Pop_MeasureBar measureLine={this._measure_line} measureSquare={this._measure_square} measurePause={this._measure_pause} style={styles.measure} result={this.state.measureResult} />}
        {this.state.popShow && <Pop_BtnList style={styles.pop} popType={this.state.popType} measure={this._pop_measure_click} />}
        <MT_BtnList POP_List={this._pop_list} />
      </View>
    );
  }

  _addMap = () => {
    const workspaceModule = new Workspace();
    //    const point2dModule = new Point2D();
    (async function () {
      this.workspace = await workspaceModule.createObj();
      this.mapControl = await this.mapView.getMapControl();
      this.map = await this.mapControl.getMap();
      await this.map.setWorkspace(this.workspace);

      let URL = '';
      if (Platform.OS === 'ios') {
        filePath = await Utility.appendingHomeDirectory(this.PATH);
      } else {
        filePath = await Utility.appendingHomeDirectory(this.PATH);
      }

      let openWk = await this.workspace.open(filePath);
      await this.map.setWorkspace(this.workspace);
      let mapName = await this.workspace.getMapName(0);
      await this.map.open(mapName);
      await this.map.refresh();
      /*定位代码,离线地图暂不开放
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
      */
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
  pop: {
    position: 'absolute',
    left: 0,
    bottom: 0.75 * 1.4 * 0.1 * Util.WIDTH + 5,
    backgroundColor: Util.USUAL_GREEN,
  },
  measure: {
    position: 'absolute',
    left: 0.25 * Util.WIDTH,
    top: 5,
    borderRadius: 5,
    backgroundColor: Util.USUAL_GREEN,
    borderStyle: 'solid',
    borderColor: Util.USUAL_SEPARATORCOLOR,
    borderWidth: 1,
  }
});