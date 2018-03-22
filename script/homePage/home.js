/*
  Copyright © SuperMap. All rights reserved.
  Author: Wang zihao
  E-mail: zihaowang5325@qq.com 
*/

import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';


import CarouselExample from './Carousel';   //轮播图
import Btnbar_home from './Btnbar_home';    //按钮栏
import HomeUsualTitle from './Home_usual_title';    //小标题
import HomeUsualMap from './Home_usual_map';    //常用地图组件

const width = Dimensions.get('window').width;

export default class HomeMain extends React.Component {

  _goToMapLoad =()=>{this.props.navigation.navigate('MapLoad')}

  render() {
    return (
      <View style={styles.container}>
        <CarouselExample/>
        <View style={styles.btnTabContainer}>
          <Btnbar_home mapLoad={this._goToMapLoad}/>
        </View>
        <HomeUsualTitle/>
        <HomeUsualMap/>
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
    height:80,
    width: width,
    padding: 5,
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderColor: 'rgba(59,55,56,0.3)',
    borderWidth:1,
  }
});