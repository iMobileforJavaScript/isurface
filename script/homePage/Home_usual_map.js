import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

import Thumbnails from '../component/Thumbnails';

export default class HomeUsualMap extends React.Component {
  constructor(props){
    super(props);
  }

  _btnClick=()=>{
    console.log('12345');
  }

  render() {
    return (
      <View style={styles.container}>
        <Thumbnails title='成都市' btnClick={this._btnClick}/>
        <Thumbnails title='北京市' src={require('../../image/mapImage1.png')} btnClick={this._btnClick}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection:'row',
    flexWrap: 'wrap',
  },
});