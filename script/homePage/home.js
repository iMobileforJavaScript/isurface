import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';

//倒入组件
import CarouselExample from './Carousel';
import Btnbar_home from './Btnbar_home';
import HomeUsualTitle from './Home_usual_title';
import HomeUsualMap from './Home_usual_map';

//倒入路由页面
import MapLoad from '../mapLoad/mapLoad';

const width = Dimensions.get('window').width;

class HomeMain extends React.Component {
  _goToMapLoad =()=>{this.props.navigation.navigate('MapLoad')}

  render() {
    return (
      <View style={styles.container}>
        <CarouselExample/>
        <View style={styles.btnTabContainer}>
          <Btnbar_home mapLoad={this._goToMapLoad}/>
        </View>
        <HomeUsualTitle/>
        <HomeUsualMap/>
      </View>
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeMain,
      navigationOptions:{
        header:null,
      }
    },
    MapLoad: {
      screen: MapLoad,
      navigationOptions:{
        headerStyle:{backgroundColor:'#2196f3'}
      }
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class Home extends React.Component {
  render() {
    return <RootStack />;
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