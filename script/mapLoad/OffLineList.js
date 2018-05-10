import * as React from 'react';
import { View, StyleSheet, Dimensions, Text, FlatList, TouchableHighlight, PixelRatio } from 'react-native';
import NavigationService from '../NavigationService';   //导航模块

const width = Dimensions.get('window').width;
const testData = [{ key: '打开' }];

class Item extends React.Component {

  render() {
    return (
      <View>
        <TouchableHighlight style={styles.item} onPress={this.props.itemClick ? this.props.itemClick : () => { console.log('item click!') }} underlayColor={'rgba(34,26,38,0.1)'}>
          <View style={styles.item}><Text style={{fontSize:18}}>{this.props.text ? this.props.text : 'item'}</Text></View>
        </TouchableHighlight>
        <View style={{ height: 2 / PixelRatio.get(), backgroundColor: '#bbbbbb'}} />
      </View>
    );
  }
}

export default class OffLineList extends React.Component {
  _renderItem = ({ item }) => {
    let key = item.key;
    return (
      <Item text={key} itemClick={() => { NavigationService.navigate('LocalMap'); }} />
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
    height: 39,
    width: width,
    paddingLeft: 15,
  },
  container: {
    height: 40,
    width: width,
    backgroundColor: 'white',
    alignSelf: 'center',
  },
});