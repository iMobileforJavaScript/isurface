/*
  Copyright © SuperMap. All rights reserved.
  Author: Wang zihao
  E-mail: zihaowang5325@qq.com 
*/

import * as React from 'react';
import { View, StyleSheet, Image, TouchableHighlight, Text } from 'react-native';
import * as Util from '../../util/const_util';

export default class Analyst_params extends React.Component {

  render() {
    return (
        <View style={styles.container}><Text>analyst</Text></View>
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