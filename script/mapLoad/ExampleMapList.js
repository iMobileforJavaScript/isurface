import * as React from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableHighlight, PixelRatio, FlatList } from 'react-native';

import NavigationService from '../NavigationService';
import Thumbnails from '../component/Thumbnails';

const defalutImageSrc = require('../../image/mapImage0.png');
const width = Dimensions.get('window').width;
const testData = [{ key: '矢量地图' }, { key: '倾斜摄影' }, { key: 'GL地图瓦片' }, { key: '影像叠加矢量地图' }, { key: '三维场景' }, { key: 'CAD' }];

export default class ExampleMapList extends React.Component {
  _itemClick = (key) => {
    console.log('12345'+key);
    switch(key){
      case '矢量地图':
      NavigationService.navigate('LocalMapView', { path: '/SampleData/Changchun/Changchun.smwu' });
      break;
      default:
      break;
    }
  }

  _renderItem = ({ item }) => {
    let key = item.key;
    let src =defalutImageSrc;
    switch (key){
      case '矢量地图':
      src = require('../../image/VectorMap.png');
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