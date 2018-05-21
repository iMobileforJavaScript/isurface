import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import * as Util from '../../util/const_util';

export default class MT_dataManager extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>todo:dataManager2222!</Text>
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