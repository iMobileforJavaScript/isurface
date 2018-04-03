/*
  Copyright © SuperMap. All rights reserved.
  Author: Wang zihao
  E-mail: zihaowang5325@qq.com 
*/

import * as React from 'react';
import { View, StyleSheet, Platform, Geolocation } from 'react-native';
import { Workspace, SMMapView, Utility, Point2D } from 'imobile_for_reactnative';

export default class Map extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <SMMapView style={styles.map} onGetInstance={this._onGetInstance} />
      </View>
    );
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