import * as React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';

const width = Dimensions.get('window').width;

export default class MapLoad extends React.Component {
  componentDidMount(){
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>details page</Text>
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