import * as React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';

import UsualTitle from '../component/Usual_title';
import Btnbar_mapLoad from './Btnbar_load';
import OffLineList from './OffLineList';

import ExampleMapList from './ExampleMapList';


const width = Dimensions.get('window').width;

export default class MapLoad extends React.Component {
  _offLine_More = () => {
    console.log('click off-line');
  }

  render() {
    return (
      <View style={styles.container}>
        <UsualTitle title='在线地图' themeColor='#F5FCFF' />
        <View style={styles.btnTabContainer}>
          <Btnbar_mapLoad TD={()=>{this.props.navigation.navigate('Map');}}/>
        </View>
        <UsualTitle title='离线地图' isRightBtn={true} btnText='更多' btnClick={this._offLine_More} />
        <OffLineList />
        <UsualTitle title='示例地图' isRightBtn={true} btnText='更多' btnClick={this._offLine_More} />
        <ExampleMapList/>
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
    backgroundColor: 'white',
    height: 80,
    width: width,
    padding: 5,
  },
  offLine: {
    width: width,
    height: 500,
    backgroundColor: 'white',
  },
});