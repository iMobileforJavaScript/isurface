import * as React from 'react';
import { View, StyleSheet, Dimensions, Text, FlatList, TouchableHighlight, PixelRatio } from 'react-native';

const width = Dimensions.get('window').width;
const testData = [{ key: '地图一' },{ key: '地图二' },{ key: '地图三' },{ key: '地图四' }];

class Item extends React.Component {
  _separator = () => {
    return <View style={{ height: 1, backgroundColor: '#bbbbbb', }} />
  }

  render() {
    return (
      <View>
        <TouchableHighlight style={styles.item} onPress={this.props.itemClick ? this.props.itemClick : () => { console.log('item click!') }} underlayColor={'rgba(34,26,38,0.1)'}>
          <View style={styles.item}><Text>{this.props.text ? this.props.text : 'item'}</Text></View>
        </TouchableHighlight>
        <View style={{ height: 2 / PixelRatio.get(), backgroundColor: '#bbbbbb', marginLeft: 7, marginRight: 7 }} />
      </View>
    );
  }
}

export default class OffLineList extends React.Component {
  _renderItem =({item})=>{
    let key = item.key;
    return (
      <Item text={key} itemClick={()=>{console.log(key)}}/>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={testData}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    display: 'flex',
    justifyContent: 'center',
    height: 40,
    width: width,
    paddingLeft: 15,
  },
  container: {
    height: 164,
    width: width,
    backgroundColor: 'white',
    alignSelf: 'center',
  },
});