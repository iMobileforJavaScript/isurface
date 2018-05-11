import * as React from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableHighlight, PixelRatio, FlatList } from 'react-native';

import NavigationService from '../NavigationService';
import Thumbnails from '../component/Thumbnails';

const defalutImageSrc = require('../../image/mapImage0.png');
const width = Dimensions.get('window').width;
const vectorMap = '矢量地图',map3D = '三维场景',ObliquePhoto = '倾斜摄影';
const testData = [{ key: vectorMap }, { key: ObliquePhoto }, { key: 'GL地图瓦片' }, { key: '影像叠加矢量地图' }, { key: map3D }, { key: 'CAD' }];

export default class ExampleMapList extends React.Component {
  _itemClick = (key) => {
    switch(key){
      case vectorMap:
      NavigationService.navigate('LocalMapView', { path: '/SampleData/Changchun/Changchun.smwu' });
      break;
      case map3D:
      NavigationService.navigate('Map3D', { path: '/SampleData/凯德Mall/凯德Mall.sxwu' });
      break;
      case ObliquePhoto:
      NavigationService.navigate('Map3D', { path: '/SampleData/MaSai/MaSai.sxwu' });
      break;
      default:
      break;
    }
  }

  _renderItem = ({ item }) => {
    let key = item.key;
    let src =defalutImageSrc;
    switch (key){
      case vectorMap:
      src = require('../../image/VectorMap.png');
      break;
      case map3D:
      src = require('../../image/map3D.png');
      break;
      case ObliquePhoto:
      src = require('../../image/ObliquePhoto.png');
      break;
    }
    return (
      <Thumbnails title={key} src={src} btnClick={()=>this._itemClick(key)} />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={testData}
          renderItem={this._renderItem}
          horizontal={false}
          numColumns={2}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    display: 'flex',
    justifyContent: 'center',
    height: 40,
    width: width,
    paddingLeft: 15,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignSelf: 'center',
  },
});