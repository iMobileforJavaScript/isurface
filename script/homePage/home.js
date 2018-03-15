import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

import CarouselExample from './Carousel';
import Btnbar_home from './Btnbar_home';

const width = Dimensions.get('window').width;

export default class Home extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <CarouselExample/>
        <View style={styles.btnTabContainer}>
          <Btnbar_home/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  btnTabContainer: {
    height:70,
    width: width,

  }
});