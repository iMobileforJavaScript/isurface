import * as React from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableHighlight, Image } from 'react-native';

const width = Dimensions.get('window').width;
const imageBrokenPath = require('../../image/mapImage0.png');

export default class Thumbnails extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <TouchableHighlight style={styles.container} onPress={this.props.btnClick} underlayColor={'rgba(34,26,38,0.1)'}>
        <View style={{flex:1}}>
          <Image style={styles.image} source={this.props.src ? this.props.src : imageBrokenPath}/>
          <View style={styles.textView}><Text>{this.props.title ? this.props.title : '默认标题'}</Text></View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 0.5*width,
    width: 0.5*width,
    backgroundColor: 'transparent',
  },
  image: {
    height: 0.5*width-25,
    width: 0.5*width-6,
    borderColor: 'rgba(59,55,56,0.3)',
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 3,
  },
  textView: {
    height: 15,
    alignSelf: 'center',
  },
});