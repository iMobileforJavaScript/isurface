/*
  Copyright © SuperMap. All rights reserved.
  Author: Wang zihao
  E-mail: zihaowang5325@qq.com 
*/

import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import * as Util from '../util/const_util';

import BtnOne from '../component/BtnOne';

const WIDTH = 0.8 * Util.WIDTH;

const home_mapLoadImgSrc = require('../../image/mapLoad.png');
const home_myMapImgSrc = require('../../image/myMap.png');
const home_mapShareImgSrc = require('../../image/mapShare.png');
const home_trackImageSrc = require('../../image/track.png');

const mapLoad = '地图加载';
const myMap = '我的地图';
const mapShare = '地图分享';
const track = '轨迹记录';

export default class Btnbar_home extends React.Component {
  constructor(props) {
    super(props);
  }

  _addElement = (delegate, src, str) => {
    if (typeof delegate == 'function' && typeof str == 'string') {

      let element = <BtnOne BtnClick={delegate} BtnImageSrc={src} BtnText={str} />;
      return (element);
    } else {
      throw Error('BthBar: please check type of params');
    }
  }

  _click_defalt = () => {
    // defalt function
  }

  render() {
    const mapLoadClick = this.props.mapLoad ? this.props.mapLoad : this._click_defalt;
    const myMapClick = this.props.myMap ? this.props.myMap : this._click_defalt;
    const mapShareClick = this.props.mapShare ? this.props.mapShare : this._click_defalt;
    const trackClick = this.props.track ? this.props.track : this._click_defalt;
    return (
      <View style={styles.container}>
        {this._addElement(mapLoadClick, home_mapLoadImgSrc, mapLoad)}
        {this._addElement(myMapClick, home_myMapImgSrc, myMap)}
        {this._addElement(mapShareClick, home_mapShareImgSrc, mapShare)}
        {this._addElement(trackClick, home_trackImageSrc, track)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: WIDTH,
    backgroundColor: 'transparent',
    alignSelf: 'center',
  },
});