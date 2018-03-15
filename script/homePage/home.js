import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

import CarouselExample from './Carousel';
import Btnbar_home from './Btnbar_home';
import HomeUsualTitle from './Home_usual_title';
import HomeUsualMap from './Home_usual_map';

const width = Dimensions.get('window').width;

export default class Home extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <CarouselExample/>
        <View style={styles.btnTabContainer}>
          <Btnbar_home/>
        </View>
        <HomeUsualTitle/>
        <HomeUsualMap/>
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
    height:80,
    width: width,
    padding: 5,
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderColor: 'rgba(59,55,56,0.3)',
    borderWidth:1,
  }
});