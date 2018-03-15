import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

import UsualTitle from '../component/Usual_title';

export default class HomeUsualTitle extends React.Component {
  constructor(props){
    super(props);
  }

  _moreUsualMap=()=>{
    console.log('click btn!');
  }

  render() {
    return (
      <UsualTitle title='最近常用' isRightBtn={true} btnText='更多' btnClick={this._moreUsualMap}/>
    );
  }
}