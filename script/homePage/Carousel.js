import * as React from 'react';
import { View, StyleSheet, Dimensions, Text, Image } from 'react-native';

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
          <View style={[{ backgroundColor: '#F5FCFF' }, this.state.size]}><Image style={styles.scrollImage} resizeMode='cover' source={require('../../image/home_scroll1.png')}/></View>
          <View style={[{ backgroundColor: '#F5FCFF' }, this.state.size]}><Image style={styles.scrollImage} resizeMode='cover' source={require('../../image/home_scroll2.png')}/></View>
        </Carousel>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height:0.5*width,
    width:width,
    alignSelf: 'center',
  },
  scrollImage: {
    alignSelf: 'center',
    height:0.5*width,
    width:width,
  }
});