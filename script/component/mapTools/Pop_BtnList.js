import * as React from 'react';
import { View, StyleSheet, Dimensions, FlatList } from 'react-native';
import * as Util from '../../util/const_util';

import Pop_Btn from './Pop_Btn';

const WIDTH = Util.WIDTH;
const ITEM_HEIGHT = 0.75 * 1.4 * 0.1 * WIDTH;
const ITEM_WIDTH = ITEM_HEIGHT;
const BORDERCOLOR = Util.USUAL_SEPARATORCOLOR;

let measure_show = false;

export default class Pop_BtnList extends React.Component {

  _measure_btn_click = () => {
    measure_show = !measure_show;
    this.props.measure(measure_show);
  }

  _analyst_btn_click = () =>{
    this.props.analyst();
  }

  _addLayer_btn_click =(type)=>{
    this.props.addlayer(type);
  }

  _btn_click_manager = (key) => {
    switch (key) {
      case '点':
        this._addLayer_btn_click('point');
        break;
      case '线':
      this._addLayer_btn_click('line');
        break;
      case '面':
      this._addLayer_btn_click('area');
        break;
      case '文字':
      this._addLayer_btn_click('text');
        break;
      case '缓冲区分析':
        this._analyst_btn_click();
        break;
      case '叠加分析':
        this._analyst_btn_click();
        break;
      case '网络分析':
        console.log('press网络分析');
        break;
      case '量算':
        this._measure_btn_click();
        break;
    }
  }

  _renderItem = ({ item }) => {
    let key = item.key;
    let btnClick = item.btnClick;
    let width = (ITEM_WIDTH < WIDTH / item.length) ? WIDTH / item.length : ITEM_WIDTH;
    return (
      <View style={[styles.item, { width: width }]}>
        <Pop_Btn BtnText={key} btnClick={() => this._btn_click_manager(key)} />
      </View>
    );
  }

  render() {
    let data;
    switch (this.props.popType) {
      case 'add_layer':
        data = [{ key: '点', length: 4 }, { key: '线', length: 4 }, { key: '面', length: 4 }, { key: '文字', length: 4 }];
        break;
      case 'analyst':
        data = [{ key: '缓冲区分析', length: 3 }, { key: '叠加分析', length: 3 }, { key: '网络分析', length: 3 }];
        break;
      case 'tools':
        data = [{ key: '量算', length: 1 }];
        break;
      default:
        data = [{ key: '量算', length: 1 }];
        break;
    }
    let props = { ...this.props };
    return (
      <View style={styles.container}{...props}>
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