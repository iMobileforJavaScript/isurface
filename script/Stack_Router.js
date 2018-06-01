/*
  Copyright © SuperMap. All rights reserved.
  Author: Wang zihao
  E-mail: zihaowang5325@qq.com 
*/

import * as React from 'react';
import { StackNavigator } from 'react-navigation';
import * as Util from './util/const_util';

import TabNavi from './Tab_Router';

//主页
import MapLoad from './mapLoad/mapLoad';
import Map from './component/Map';
import LocalMap from './component/LocalMap';
import Map3D from './component/Map3D';

//我的
import Login from './mine/login';
import Register from './register&getBack/register';
import GetBack from './register&getBack/GetBack';

//地图加载
import Local_Map from './localMap/Local_Map';
//地图功能页面
import MT_layermanager from './component/mapTools/MT_layerManager';//todo: layermanager->mapManager(文件更名)
import MT_dataCollection from './component/mapTools/MT_dataCollection';
import MT_dataManager from './component/mapTools/MT_dataManager';
import LayerManager_mapChange from './component/mapTools/LayerManager_mapChange';
import LayerManager_addDataset from './component/mapTools/LayerManager_addDataset';
import DataManager_newDSource from './component/mapTools/DataManager_newDSource';
import DataManager_newDSet from './component/mapTools/DataManager_newDSet';
import Analyst_params from './component/mapTools/Analyst_params';
import Add_Layer from './component/mapTools/Add_Layer';

const headColor = Util.USUAL_BLUE;
const headFontColor = 'white';

const RootStack = StackNavigator(
  {
    Home: {
      screen: TabNavi,
      navigationOptions: {
        header: null,
      }
    },
    MapLoad: {
      screen: MapLoad,
      navigationOptions: {
        headerTitle: '地图加载',
        headerStyle: { backgroundColor: headColor },
        headerTitleStyle: { alignSelf: 'center' },
        headerTintColor: headFontColor,
      }
    },
    Map: {
      screen: Map,
      navigationOptions: {
        headerStyle: { backgroundColor: headColor },
        headerTitleStyle: { alignSelf: 'center' },
        headerTintColor: headFontColor,
      }
    },
    LocalMapView: {
      screen: LocalMap,
      navigationOptions: {
        headerStyle: { backgroundColor: headColor },
        headerTitleStyle: { alignSelf: 'center' },
        headerTintColor: headFontColor,
      }
    },
    Map3D: {
      screen: Map3D,
      navigationOptions: {
        headerStyle: { backgroundColor: headColor },
        headerTitleStyle: { alignSelf: 'center' },
        headerTintColor: headFontColor,
      }
    },
    MapChange: {
      screen: LayerManager_mapChange,
      navigationOptions: {
        headerTitle: '地图切换',
        headerStyle: { backgroundColor: headColor },
        headerTitleStyle: { alignSelf: 'center' },
        headerTintColor: headFontColor,
      }
    },
    AddDataset: {
      screen: LayerManager_addDataset,
      navigationOptions: {
        headerTitle: '添加数据集',
        headerStyle: { backgroundColor: headColor },
        headerTitleStyle: { alignSelf: 'center' },
        headerTintColor: headFontColor,
      }
    },
    NewDataset: {
      screen: DataManager_newDSet,
      navigationOptions: {
        headerTitle: '新建数据集',
        headerStyle: { backgroundColor: headColor },
        headerTitleStyle: { alignSelf: 'center' },
        headerTintColor: headFontColor,
      }
    },
    NewDatasource: {
      screen: DataManager_newDSource,
      navigationOptions: {
        headerTitle: '新建数据源',
        headerStyle: { backgroundColor: headColor },
        headerTitleStyle: { alignSelf: 'center' },
        headerTintColor: headFontColor,
      }
    },
    Register: {
      screen: Register,
      navigationOptions: {
        headerTitle: '注册',
        headerStyle: { backgroundColor: headColor },
        headerTitleStyle: { alignSelf: 'center' },
        headerTintColor: headFontColor,
      }
    },
    GetBack: {
      screen: GetBack,
      navigationOptions: {
        headerTitle: '找回密码',
        headerStyle: { backgroundColor: headColor },
        headerTitleStyle: { alignSelf: 'center' },
        headerTintColor: headFontColor,
      }
    },
    LocalMap: {
      screen: Local_Map,
      navigationOptions: {
        headerTitle: '此设备',
        headerStyle: { backgroundColor: headColor },
        headerTitleStyle: { alignSelf: 'center' },
        headerTintColor: headFontColor,
      }
    },
    LayerManager: {
      screen: MT_layermanager,
      navigationOptions: {
        headerTitle: '地图管理',
        headerStyle: { backgroundColor: headColor },
        headerTitleStyle: { alignSelf: 'center' },
        headerTintColor: headFontColor,
      }
    },
    DataCollection: {
      screen: MT_dataCollection,
      navigationOptions: {
        headerTitle: '数据采集',
        headerStyle: { backgroundColor: headColor },
        headerTitleStyle: { alignSelf: 'center' },
        headerTintColor: headFontColor,
      }
    },
    DataManager: {
      screen: MT_dataManager,
      navigationOptions: {
        headerTitle: '数据管理',
        headerStyle: { backgroundColor: headColor },
        headerTitleStyle: { alignSelf: 'center' },
        headerTintColor: headFontColor,
      }
    },
    AnalystParams: {
      screen: Analyst_params,
      navigationOptions: {
        headerTitle: '缓冲区分析',
        headerStyle: { backgroundColor: headColor },
        headerTitleStyle: { alignSelf: 'center' },
        headerTintColor: headFontColor,
      }
    },
    AddLayer: {
      screen: Add_Layer,
      navigationOptions: {
        headerTitle: '添加图层',
        headerStyle: { backgroundColor: headColor },
        headerTitleStyle: { alignSelf: 'center' },
        headerTintColor: headFontColor,
      }
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default RootStack;