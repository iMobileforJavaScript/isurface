import * as React from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableHighlight } from 'react-native';

const width = Dimensions.get('window').width;
const themeColor = '#F5FCFF';
const headColor = '#2196f3';

export default class UsualTitle extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>{this.props.title ? this.props.title : '默认标题'}</Text>
          {this.props.isRightBtn && <TouchableHighlight style={styles.titleBtn} onPress={this.props.btnClick} underlayColor={'rgba(34,26,38,0.1)'}><Text style={styles.btnText}>{this.props.btnText ? this.props.btnText :'按钮'}</Text></TouchableHighlight>}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width:width,
    backgroundColor: headColor,
    marginTop:10,
  },
  title: {
    backgroundColor: themeColor,
    marginLeft: 10,
    marginBottom: 1,
    height: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {
    marginLeft: 3,
    width: 100,
    fontSize: 20,
  },
  titleBtn: {
    marginRight: 10,
    width: 70,
  },
  btnText: {
    textDecorationLine: 'underline',
    fontSize: 17,
    color: 'blue',
    alignSelf: 'center',
  },
});