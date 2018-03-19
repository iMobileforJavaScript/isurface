import * as React from 'react';
import { View, StyleSheet, Dimensions, Image, TouchableHighlight, Text } from 'react-native';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

export default class BtnOne extends React.Component {

  render() {
    return (
      <TouchableHighlight style={styles.container} onPress={this.props.BtnClick} underlayColor={'rgba(34,26,38,0.1)'}>
        <View style={styles.inner}>
          {this.props.BtnImageSrc && <Image style={styles.image} source={this.props.BtnImageSrc} />}
          {this.props.BtnText && <Text style={styles.text}>{this.props.BtnText}</Text>}
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: 70,
    backgroundColor: 'transparent',
  },
  inner: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
    alignSelf: 'center',
  },
  image: {
    height: 50,
    width: 50,
    alignSelf: 'center',
    borderRadius: 5,
  },
  text: {
    backgroundColor: 'transparent',
    width: 70,
    textAlign: 'center',
  }
});