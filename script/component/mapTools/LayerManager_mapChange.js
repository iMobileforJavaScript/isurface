import * as React from 'react';
import { View, StyleSheet, Text, FlatList, TouchableHighlight } from 'react-native';
import * as Util from '../../util/const_util';

export default class LayerManager_mapChange extends React.Component {
  constructor(props) {
    super(props);
    const { state } = this.props.navigation;
    this.workspace = state.params.workspace;
    this.map = state.params.map;
    (async function () {
      let maps = await this.workspace.getMaps();
      let count = await maps.getCount();
      let mapNameArr = [];
      for (let i = 0; i < count; i++) {
        let name = await maps.get(i);
        let map = this.map;
        mapNameArr.push({ key: name, num: i, map: map });
      }
      this.setState({
        dataList: mapNameArr,
      })
    }).bind(this)();
  }

  state = {
    dataList: '',
  }

  _map_change = (name, num, map) => {
    (async function () {
      await map.close();
      await map.open(name);
      await map.refresh();
    }).bind(this)()
  }

  _renderItem = ({ item }) => {
    let name = item.key;
    let num = item.num;
    let map = item.map;
    return (
      <View style={styles.itemContainer}>
        <TouchableHighlight style={styles.itemBtn} onPress={(name, num, map) => this._map_change} underlayColor={Util.UNDERLAYCOLOR}>
          <Text>{name}</Text>
        </TouchableHighlight>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataList}
          renderItem={this._renderItem}
        />
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
  itemContainer: {
    height: 46,
    width: Util.WIDTH,
    display: 'flex',
  },
  itemBtn: {
    flex: 1,
    justifyContent:'center',
  }
});