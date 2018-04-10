/*
  Copyright © SuperMap. All rights reserved.
  Author: Wang zihao
  E-mail: zihaowang5325@qq.com 
*/

import * as React from 'react';
import { View, StyleSheet, Image, TouchableHighlight, Text } from 'react-native';
import * as Util from '../../util/const_util';

export default class Add_Layer extends React.Component {
  constructor(props){
    super(props);
    const { state } = this.props.navigation
    switch(state.params.type){
      case 'point':
      console.log('点!!!');
      break;
      case 'line':
      console.log('线!!!');
      break;
      case 'area':
      console.log('面!!!');
      break;
      case 'text':
      console.log('文字!!!');
      break;
  }
}

  render() {
    return (
        <View style={styles.container}><Text>addLayer</Text></View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
});