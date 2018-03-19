import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

import BtnOne from '../component/BtnOne';

const width = Dimensions.get('window').width;

const home_mapLoadImgSrc = require('../../image/mapLoad.png');
const home_myMapImgSrc = require('../../image/myMap.png');
const home_mapShareImgSrc = require('../../image/mapShare.png');

const mapLoad = '地图加载';
const myMap = '我的地图';
const mapShare = '地图分享';

export default class Btnbar_home extends React.Component {
  constructor(props){
    super(props);
  }

  _addElement=(delegate,src,str)=>{
    if(typeof delegate == 'function' && typeof str == 'string'){

      let element = <BtnOne BtnClick={delegate} BtnImageSrc={src} BtnText={str}/>;
      return (element);
    } else {
      throw Error('BthBar: please check type of params');
    }
  }

  _click_mapLoad=()=>{
    console.log(mapLoad);
  }

  _click_myMap=()=>{
    console.log(myMap);
  }

  _click_mapShare=()=>{
    console.log(mapShare);
  }

  render() {
    const mapLoadClick = this.props.mapLoad ? this.props.mapLoad : this._click_mapLoad;
    const myMapClick = this.props.myMap ? this.props.myMap : this._click_myMap;
    const mapShareClick = this.props.mapShare ? this.props.mapShare : this._click_mapShare;
    return (
      <View style={styles.container}>
        {this._addElement(mapLoadClick,home_mapLoadImgSrc,mapLoad)}
        {this._addElement(myMapClick,home_myMapImgSrc,myMap)}
        {this._addElement(mapShareClick,home_mapShareImgSrc,mapShare)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width:0.8*width,
    backgroundColor: 'transparent',
    alignSelf: 'center',
  },
});