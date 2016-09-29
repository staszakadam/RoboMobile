import React, { StyleSheet, Navigator } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import BackgroundComponent from '../Components/Misc/BackgroundComponent';
import Routes from '../Components/Routing/RoutesComponent';
import Border from '../Helpers/StyleBorderHelper';
import Reducers from '../Reducers/index';


const reducer = combineReducers(Reducers);
const store = createStore(reducer);

export default class NavigatorComponent extends React.Component {
    constructor(props, context){
      super(props, context);
    }
    renderScene(route, navigator){
        var Component = Routes[route.name];
        return <Component route={route} navigator={navigator} store={store}/>;
    }
    render() {
        return (
          <BackgroundComponent>
              <Navigator
                style={style.navigatorContainer}
                initialRoute={{name: 'start'}}
                renderScene={this.renderScene}
                configureScene={ (route) => {
                  if (route.sceneConfig){
                    return route.sceneConfig
                  }
                  else if (route.name == 'start')
                  {
                    var transition = Navigator.SceneConfigs.FromTheTop;
                    return transition;
                  }
                  else if (route.name == 'authorization')
                  {
                    var transition = Navigator.SceneConfigs.FloatFromBottom;
                    return transition;
                  }
                  else {
                    var transition = Navigator.SceneConfigs.FloatFromRight;
                    transition.gestures = Navigator.SceneConfigs.BaseLeftToRightGesture;
                    return transition;
                  }
                }}
                />
            </BackgroundComponent>
        );
    }
}

const style = StyleSheet.create({
  navigatorContainer: {
    flex: 1
  }
});
