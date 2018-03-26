import * as React from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import * as Util from '../util/const_util';

const WIDTH = 70;
const textBlue = Util.USUAL_BLUE;

export default class TextBtn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
    };
  }

  _btnClick = () => {
    if (!this.state.clicked) {
      this.setState({ clicked: true });
    }
    if (this.props.btnClick) {
      this.props.btnClick();
    }
  }

  render() {
    const containerWidth = this.props.width ? this.props.width : WIDTH;
    const containerHeight = this.props.height ? this.props.height : null;
    return (
      <View style={[styles.container,{width:containerWidth,height:containerHeight}]}>
        <TouchableHighlight style={styles.titleBtn} onPress={this._btnClick} underlayColor={Util.UNDERLAYCOLOR}>
          <Text style={[styles.btnText, { color: this.state.clicked ? Util.USUAL_PURPLE : textBlue }]}>{this.props.btnText ? this.props.btnText : '按钮'}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    textDecorationLine: 'underline',
    fontSize: 17,
    color: 'blue',
    alignSelf: 'center',
  },
});