import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

export default class mapLoad extends React.Component {

  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});