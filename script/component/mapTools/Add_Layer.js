/*
  Copyright © SuperMap. All rights reserved.
  Author: Wang zihao
  E-mail: zihaowang5325@qq.com 
*/

import * as React from 'react';
import { View, StyleSheet, Image, TouchableHighlight, Text } from 'react-native';
import * as Util from '../../util/const_util';
import BorderInput from '../../register&getBack/border_input';
import BtnTwo from '../BtnTwo';

export default class Add_Layer extends React.Component {
  constructor(props) {
    super(props);
    const { state } = this.props.navigation;
    this.workspace = state.params.workspace;
    this.mapCtr = state.params.mapCtr;
    switch (state.params.type) {
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

  state={
    InputText:'',
  }

  _test_change =(text)=>{
  this.setState({InputText:text});
  }

  _addlayer =async()=>{
  //datasource -> createDatasetVector
  //workspace -> openDatasource
  //let dataSource = await this.workspace.
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.sup}>
          <BorderInput placeholder='请输入图层名称' textChange={this._test_change}/>
        </View>
        <View style={styles.sup}>
          <BtnTwo text='确定' btnClick={this._addlayer}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sup: {
    margin:7,
  }
});