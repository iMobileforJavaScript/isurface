/*
  Copyright © SuperMap. All rights reserved.
  Author: Wang zihao
  E-mail: zihaowang5325@qq.com 
*/

import * as React from 'react';
import { View, StyleSheet, Platform, Geolocation } from 'react-native';
import { Workspace, SMSceneView, Utility } from 'imobile_for_reactnative';

import * as Util from '../util/const_util';

export default class LocalMap extends React.Component {
  constructor(props) {
    super(props);
    const { state } = this.props.navigation
    this.PATH = state.params.path;
  }

  _onGetInstance = (sceneControl) => {
    this.sceneControl = sceneControl;
    this._addScene();
  }

  render() {
    return (
      <View style={styles.container}>
        <SMSceneView ref="sceneControl" style={styles.map} onGetScene={this._onGetInstance} />
      </View>
    );
  }

  _addScene = () => {
    var workspaceModule = new Workspace();
    (async function () {

      this.workspace = await workspaceModule.createObj();   //创建workspace实例
      this.scene = await this.sceneControl.getScene();      //获取场景对象
      await this.scene.setWorkspace(this.workspace);        //设置工作空间
      var filePath = await Utility.appendingHomeDirectory(this.PATH);
      var openWk = await this.workspace.open(filePath);     //打开工作空间
      if (!openWk) {
        console.log(" 打开工作空间失败");
        return;
      }
      var sceneName = await this.workspace.getSceneName(0); //获取场景名称
      await this.scene.open(sceneName);                     //根据名称打开指定场景
      await this.scene.refresh();                           //刷新场景

      // let layers3ds = await this.scene.getLayer3Ds();
      // for (let i = 0; i < 3; i++) {
      //   let layer3d = await layers3ds.get(i);
      //   let isvisable = await layer3d.getVisable();
      //   await layer3d.setVisable(!isvisable);
      // }
      // await this.scene.refresh()
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