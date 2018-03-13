/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Platform,
    TouchableHighlight,
    Text,
    Alert,
} from 'react-native';
import{
    Workspace,
    SMMapView,
    Utility,
} from 'imobile_for_reactnative';

export default class App extends Component<{}> {

    _onGetInstance = (mapView) => {
        this.mapView = mapView;
        this._addMap();
    }

    render() {
      return (
        <View style={styles.container}>
            <SMMapView style={styles.map} onGetInstance={this._onGetInstance}/>
        </View>
      );
    }

    _addMap=()=> {
        var workspaceModule = new Workspace();
        (async function () {
            this.workspace = await workspaceModule.createObj();
            this.mapControl = await this.mapView.getMapControl();
            this.map = await this.mapControl.getMap();
         
            var filePath = '';
            if(Platform.OS === 'ios'){
                filePath = await Utility.appendingHomeDirectory('/Documents/China400.smwu');
            }else{
                filePath = await Utility.appendingHomeDirectory('/SampleData/China400/China400.smwu');
            }

            var openWk = await this.workspace.open(filePath);
            await this.map.setWorkspace(this.workspace);
            var mapName = await this.workspace.getMapName(0);
            await this.map.open(mapName);
            await this.map.refresh();
        }).bind(this)();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    map: {
        flex: 1,
        alignSelf: 'stretch',
    },
    button: {
        top:50,
        left:50,
        position:'absolute',
        flex:1,
    },
    highlight:{
        height:50,
        width:100,
        backgroundColor:'red',
    }
});
