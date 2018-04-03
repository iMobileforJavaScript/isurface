import * as React from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableHighlight, PixelRatio, FlatList } from 'react-native';
import * as Util from '../../util/const_util';

import MT_Btn from './MT_Btn';

const WIDTH = Util.WIDTH;
const ITEM_HEIGHT = 1.4 * 0.1 * WIDTH;
const ITEM_WIDTH = ITEM_HEIGHT;

export default class MT_BtnList extends React.Component {
  _renderItem = ({ item }) => {
    let key = item.key;
    let image = item.image;
    let width = (ITEM_WIDTH < WIDTH / this.props.data.length) ? WIDTH / this.props.data.length : ITEM_WIDTH;
    return (
      <View style={[styles.item, { width: width }]}>
        <MT_Btn BtnText={key} BtnImageSrc={image} btnClick={() => { console.log(key) }} />
      </View>
    );
  }

  render() {
    const data = this.props.data;
    let width = (WIDTH < ITEM_WIDTH * this.props.data.length) ? ITEM_WIDTH * this.props.data.length : WIDTH;
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
    height: 75,
    width: WIDTH,
    backgroundColor: Util.USUAL_GREEN,
    alignSelf: 'center',
  },
});