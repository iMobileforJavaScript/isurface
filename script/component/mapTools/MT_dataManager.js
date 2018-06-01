import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import * as Util from '../../util/const_util';

import NavigationService from '../../NavigationService';
import DataManager_tab from './DataManager_tab';

export default class MT_dataManager extends React.Component {
  constructor(props) {
    super(props);
    const { state } = this.props.navigation;
    this.workspace = state.params.workspace;
    this.map = state.params.map;
    (async function () {
      // let layerCount = await this.map.getLayersCount();
      // let layerNameArr = [];
      // for (let i = 0; i < layerCount; i++) {
      //   let layer = await this.map.getLayer(i);
      //   let name = await layer.getName();
      //   let map = this.map;
      //   layerNameArr.push({ key: name, obj: layer, map:map });
      // }
      // this.setState({
      //   datasourceList: layerNameArr,
      // })
    }).bind(this)();
  }

  state = {
    datasourceList: '',
  }

  _new_datasource=()=>{
    let ws = this.workspace;
    let map = this.map;
    NavigationService.navigate('NewDatasource', { workspace: ws, map: map });
  }

  _new_dataset=()=>{
    let ws = this.workspace;
    let map = this.map;
    NavigationService.navigate('NewDataset', { workspace: ws, map: map });
  }

  // _renderItem = ({ item }) => {
  //   let key = item.key;
  //   let layer = item.obj;
  //   let map = item.map;
  //   return (
  //     <LayerManager_item layer={layer} name={key} map={map}/>
  //   );
  // }

  render() {
    return (
      <View style={styles.container}>
      <DataManager_tab dSource={this._new_datasource} dSet={this._new_dataset} />
      {/*<FlatList
        data={this.state.datasourceList}
        renderItem={this._renderItem}
        getItemLayout={(data, index) => ( {length: 47, offset: 47 * index, index} )}
      />*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
  },
});