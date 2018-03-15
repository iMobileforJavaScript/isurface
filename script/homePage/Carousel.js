import * as React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';

import Carousel from '../../third/react-native-looped-carousel/index';

const { width, height } = Dimensions.get('window');

export default class CarouselExample extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      size: { width, height },
    };
  }

  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  }

  render() {
    return (
      <View style={styles.container} onLayout={this._onLayoutDidChange}>
        <Carousel
          delay={4000}
          style={this.state.size}
          autoplay
          pageInfo
          onAnimateNextPage={(p) => console.log(p)}
        >
          <View style={[{ backgroundColor: '#BADA55' }, this.state.size]}><Text>1</Text></View>
          <View style={[{ backgroundColor: 'red' }, this.state.size]}><Text>2</Text></View>
          <View style={[{ backgroundColor: 'blue' }, this.state.size]}><Text>3</Text></View>
        </Carousel>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height:200,
    width:width,
    alignSelf: 'center',
  },
});