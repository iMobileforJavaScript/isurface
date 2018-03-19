import * as React from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableHighlight, PixelRatio, FlatList } from 'react-native';

import Thumbnails from '../component/Thumbnails';

const width = Dimensions.get('window').width;
const testData = [{ key: 'GL地图瓦片' },{ key: '倾斜摄影' },{ key: '矢量地图' },{ key: '影响叠加矢量地图' },{ key: '三维场景' },{ key: 'CAD' }];

export default class ExampleMapList extends React.Component {
  _renderItem = ({ item }) => {
    let key = item.key;
    return (
      <Thumbnails title={key} btnClick={() => { console.log(key) }} />
    );
  }

  render() {
    return (
      <View  style={styles.container}>
        <FlatList
          data={testData}
          renderItem={this._renderItem}
          horizontal={false}
          numColumns = {2}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    display:'flex',
    justifyContent: 'center',
    height: 40,
    width: width,
    paddingLeft:15,
  },
  container: {
    flex:1,
    backgroundColor: 'white',
    alignSelf: 'center',
  },
});