import React from 'react-native';
var { View, Text, AppRegistry, Image, StyleSheet, NavigatorIOS, Navigator } = React;
import AppContainerComponent from './src/Components/Containers/AppContainerComponent/AppContainerComponent';


AppRegistry.registerComponent('roboticketmobile', () => AppContainerComponent);

// VERY IMPORTANT !!!!!!!!
// react-native-router-flux / index.js line: 550
//  sceneStyle={{ paddingTop: 0, backgroundColor:'transparent' }}
