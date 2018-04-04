import * as React from 'react';
import { View, StyleSheet, Dimensions, FlatList } from 'react-native';
import * as Util from '../../util/const_util';

import MT_Btn from './MT_Btn';

const WIDTH = Util.WIDTH;
const ITEM_HEIGHT = 0.75 * 1.4 * 0.1 * WIDTH;
const ITEM_WIDTH = ITEM_HEIGHT;
const BORDERCOLOR = Util.USUAL_SEPARATORCOLOR;
let show = false;
let type = '';

export default class MT_BtnList extends React.Component {
  state = {
    data: [{ key: '添加图层', image: require('../../../image/add_layer.png'), btnClick: ()=>{console.log('44444444!')} },
    { key: '数据采集', image: require('../../../image/data_collect.png') , btnClick: ()=>{console.log('44444444!')}},
    { key: '图层管理', image: require('../../../image/layer_control.png') , btnClick: ()=>{console.log('44444444!')}},
    { key: '数据分析', image: require('../../../image/analyst.png'), btnClick: ()=>{console.log('4443333444!')} },
    { key: '小工具', image: require('../../../image/tools.png'), btnClick: ()=>{console.log('44444444!')}}],
  }

  _addLayer = () => {
    show = !show;
    type = 'add_layer';
    this.props.POP_List(show, type);
  }

  _analyst = () => {
    show = !show;
    type = 'analyst';
    this.props.POP_List(show, type);
  }

  _tools = () => {
    show = !show;
    type = 'tools';
    this.props.POP_List(show, type);
  }

  _renderItem = ({ item }) => {
    let key = item.key;
    let image = item.image;
    let btnClick = item.btnClick;
    let width = (ITEM_WIDTH < WIDTH / this.state.data.length) ? WIDTH / this.state.data.length : ITEM_WIDTH;
    return (
      <View style={[styles.item, { width: width }]}>
        <MT_Btn BtnText={key} BtnImageSrc={image} btnClick={btnClick} />
      </View>
    );
  }

  render() {
    const data = this.state.data;
    let width = (WIDTH < ITEM_WIDTH * this.state.length) ? ITEM_WIDTH * this.state.length : WIDTH;
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={this._renderItem}
          horizontal={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: ITEM_HEIGHT,
    width: ITEM_WIDTH,
  },
  container: {
    height: ITEM_HEIGHT + 5,
    width: WIDTH,
    backgroundColor: Util.USUAL_GREEN,
    alignSelf: 'center',
    borderStyle: 'solid',
    borderColor: BORDERCOLOR,
    borderTopWidth: 1,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
  },
});