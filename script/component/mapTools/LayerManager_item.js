/*
  Copyright © SuperMap. All rights reserved.
  Author: Wang zihao
  E-mail: zihaowang5325@qq.com 
*/

import * as React from 'react';
import { View, StyleSheet, Text, TouchableHighlight, FlatList, Image } from 'react-native';
import * as Util from '../../util/const_util';

import MT_Btn from './MT_Btn';

export default class LayerManager_item extends React.Component {
  constructor(props){
    super(props);
    this.layer = this.props.layer;
    this.map = this.props.map;
    (async function () {
      let editable = await this.layer.getEditable();
      let {isVisible} = await this.layer.getVisible();// todo:  此处底层bug,需要修改
      let selectable = await this.layer.isSelectable();
      this.setState({
        editable:editable,
        visable:isVisible,
        selectable:selectable,
        rowShow:false,
      });
    }).bind(this)();
  }

  state={
    editable:false,
    visable:false,
    selectable:false,
    rowShow:false,
  }

  _editable_change=()=>{
    this.setState((oldstate)=>{
      let oldEdit = oldstate.editable;
      (async function (){
        await this.layer.setEditable(!oldEdit);
        await this.map.refresh();
      }).bind(this)();
      return({editable:!oldEdit})
    })
  }

  _visable_change=()=>{
    this.setState((oldstate)=>{
      let oldVisibe = oldstate.visable;
      (async function (){
        await this.layer.setVisible(!oldVisibe);
        await this.map.refresh();
      }).bind(this)();
      return({visable:!oldVisibe})
    })
  }

  _selectable_change=()=>{
    this.setState((oldstate)=>{
      let oldSelect = oldstate.selectable;
      (async function (){
        await this.layer.setSelectable(!oldSelect);
        await this.map.refresh();
      }).bind(this)();
      return({selectable:!oldSelect})
    })
  }
  _pop_row=()=>{
    this.setState((oldstate)=>{
      let oldshow = oldstate.rowShow;
      return({rowShow:!oldshow})
    })
  }

  render() {
    let name = this.props.name;
    const isShow = this.state.rowShow;
    const image1 = this.state.editable ? require('../../../image/edit.png') :require('../../../image/edit-off.png');
    const image2 = this.state.visable ? require('../../../image/eye.png') :require('../../../image/eye-off.png');
    const image3 = this.state.selectable ? require('../../../image/select.png') :require('../../../image/select-off.png');
    const image4 = this.state.rowShow ? require('../../../image/show.png') :require('../../../image/show-off.png');
    return (
      <View style={styles.container}>
        <View style={styles.rowOne}>
        <View style={styles.btn_container}>
          <TouchableHighlight style={styles.btn} underlayColor={Util.UNDERLAYCOLOR} onPress={this._editable_change}><Image style={styles.btn_image} source={image1}/></TouchableHighlight>
          <TouchableHighlight style={styles.btn} underlayColor={Util.UNDERLAYCOLOR} onPress={this._visable_change}><Image style={styles.btn_image} source={image2}/></TouchableHighlight>
          <TouchableHighlight style={styles.btn} underlayColor={Util.UNDERLAYCOLOR} onPress={this._selectable_change}><Image style={styles.btn_image} source={image3}/></TouchableHighlight>
          </View>
          <View style={styles.text_container}><Text>{name}</Text></View>
          <TouchableHighlight style={styles.btn} underlayColor={Util.UNDERLAYCOLOR} onPress={this._pop_row}><Image style={styles.btn_image} source={image4}/></TouchableHighlight>
        </View>
        {isShow && <View style={styles.rowTwo}><Text>1234</Text></View>}
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
  rowOne: {
    height:46,
    width:Util.WIDTH,
    padding:3,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  btn_container:{
    height:40,
    width:46*3,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  btn:{
    height:40,
    width:40,
    marginLeft:3,
    marginRight:3,
  },
  btn_image:{
    height:40,
    width:40,
  },
  text_container:{
    height:40,
    width:150,
  },
  rowTwo: {
    height:46,
    width:Util.WIDTH,
  },
});