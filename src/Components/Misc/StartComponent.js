'use strict';

import React, {Component, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Border from '../../Helpers/StyleBorderHelper';
import BackgroundComponent from './BackgroundComponent';

export default class StartComponent extends Component
{
  constructor(props, context){
    super(props, context);
  }
  render(){
    return(
      <View style={[style.container, Border('black')]}>
          <TouchableOpacity onPress={this.onStartPress.bind(this)} style={{backgroundColor:'transparent'}}>
              <Text style={style.text}>Start</Text>
          </TouchableOpacity>
      </View>
        )
  }
  onStartPress(){
    this.props.navigator.push({name: 'authorization'});
  }
}

var style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 50,
    backgroundColor: 'transparent'
  },
  text: {
    marginTop: 50,
    fontSize: 30,
    color: 'white',
    fontFamily: 'MalayalamSangamMN-Bold',
    flex:1,
    backgroundColor: 'transparent'
  }
});
