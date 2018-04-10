import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import * as Util from '../../util/const_util';

import MT_Btn from './MT_Btn';

export default class MT_layermanager extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>todo:layermanager!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
});