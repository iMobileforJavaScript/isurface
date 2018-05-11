/*
  Copyright © SuperMap. All rights reserved.
  Author: Wang zihao
  E-mail: zihaowang5325@qq.com 
*/

import * as React from 'react';
import { View, StyleSheet, Dimensions, Text, PixelRatio } from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';

import NavigationService from '../NavigationService';   //导航模块
import UsualTitle from '../component/Usual_title';
import Btnbar_mapLoad from './Btnbar_load';
import OffLineList from './OffLineList';
// import OpenLocalMap from './OpenLocalMap';

import ExampleMapList from './ExampleMapList';


const width = Dimensions.get('window').width;

export default class MapLoad extends React.Component {

  _offLine_More = () => {
    console.log('click off-line');
  }

  render() {
    return (
      <View style={styles.container}>
        <UsualTitle title='本地地图'/>
        <OffLineList />
        <UsualTitle title='在线地图' themeColor='#F5FCFF' />
        <View style={styles.btnTabContainer}>
          <Btnbar_mapLoad
            TD={() => { NavigationService.navigate('Map', { type: 'TD' }); }}
            Baidu={() => { NavigationService.navigate('Map', { type: 'Baidu' }); }}
            OSM={() => { NavigationService.navigate('Map', { type: 'OSM' }); }}
            Google={() => { NavigationService.navigate('Map', { type: 'Google' }); }}
          />
        </View>
        <View style={{ height: 2 / PixelRatio.get(), backgroundColor: '#bbbbbb'}} />
        <UsualTitle title='示例地图' isRightBtn={true} btnText='更多' btnClick={this._offLine_More} />
        <ExampleMapList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  btnTabContainer: {
    backgroundColor: 'white',
    height: 80,
    width: width,
    padding: 5,
    alignSelf: 'center',
  },
  offLine: {
    width: width,
    height: 500,
    backgroundColor: 'white',
  },
});