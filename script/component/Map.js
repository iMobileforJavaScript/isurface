import * as React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Workspace, SMMapView, Utility } from 'imobile_for_reactnative';

export default class Map extends React.Component {
  _onGetInstance = (mapView) => {
    this.mapView = mapView;
    this._addMap();
  }

  render() {
    return (
      <View style={styles.container}>
        <SMMapView style={styles.map} onGetInstance={this._onGetInstance} />
      </View>
    );
  }

  _addMap = () => {
    const workspaceModule = new Workspace();
    (async function () {
      this.workspace = await workspaceModule.createObj();
      this.mapControl = await this.mapView.getMapControl();
      this.map = await this.mapControl.getMap();

      let filePath = '';
      if (Platform.OS === 'ios') {
        filePath = await Utility.appendingHomeDirectory('/Documents/China400.smwu');
      } else {
        filePath = await Utility.appendingHomeDirectory('/SampleData/China400/China400.smwu');
      }

      let openWk = await this.workspace.open(filePath);
      await this.map.setWorkspace(this.workspace);
      let mapName = await this.workspace.getMapName(0);
      await this.map.open(mapName);
      await this.map.refresh();
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