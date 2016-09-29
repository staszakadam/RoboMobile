/* @flow */
'use strict'
import React, {Component} from 'react-native';

import RouterFlux from 'react-native-router-flux';
const {Actions} = RouterFlux;

import CheckBox from 'react-native-checkbox';
import ItemCheckbox from 'react-native-item-checkbox';

import Button from 'react-native-button';
import StyleBorderHelper from '../../Helpers/StyleBorderHelper';
import LoginService from '../../Services/LoginService';

import ReactNativeBlur from 'react-native-blur';
import BackgroundComponent from '../Misc/BackgroundComponent';
const {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  AlertIOS,
  TouchableHighlight
} = React;

const {
  BlurView,
  VibrancyView
} = ReactNativeBlur;

export default class RegistrationComponent extends React.Component{
  constructor(){
    super();
  }
  render() {
    var self = this;
      return (
                <View style={style.blurContainer}>
                  <View style={[style.inputsContainer]}>
                    <View style={style.inputContainer}>
                    <TextInput
                      placeholder='PESEL'
                      placeholderTextColor='white'
                      clearButtonMode='never'
                      style={style.inputs}
                      />
                    </View>
                    <View style={style.inputContainer}>
                    <TextInput
                      placeholder='IMIĘ'
                      placeholderTextColor='white'
                      clearButtonMode='never'
                      style={style.inputs}
                      />
                    </View>
                    <View style={style.inputContainer}>
                    <TextInput
                      placeholder='NAZWISKO'
                      placeholderTextColor='white'
                      clearButtonMode='never'
                      style={style.inputs}
                      />
                    </View>
                    <View style={style.inputContainer}>
                    <TextInput
                      placeholder='E-MAIL'
                      placeholderTextColor='white'
                      clearButtonMode='never'
                      style={style.inputs}
                      />
                    </View>
                    <View style={style.inputContainer}>
                    <TextInput
                      placeholder='HASŁO'
                      placeholderTextColor='white'
                      clearButtonMode='never'
                      style={style.inputs}
                      />
                    </View>
                    <View style={style.inputContainer}>
                    <TextInput
                      placeholder='POWTÓRZ HASŁO'
                      placeholderTextColor='white'
                      clearButtonMode='never'
                      style={style.inputs}
                      />
                    </View>
                    <View style={style.forgotPasswordContainer}>
                      <TouchableHighlight onPress={self.onLoginPress}>
                         <Text style={style.forgotPasswordText}>nie pamiętam hasła</Text>
                      </TouchableHighlight>
                    </View>
                  </View>
                  <View style={style.footerContainer}>
                    <CheckBox
                      label='Zapoznałem się z warunkami serwisu'
                      checked={true}
                      onChange={(checked) => console.log('I am checked', checked)}/>
                      <View style={style.login}>
                        <TouchableHighlight onPress={self.onLoginPress}>
                          <Text style={style.navigationText}>Utwórz konto</Text>
                        </TouchableHighlight>
                      </View>
                    </View>
                  </View>
              );
  }
  onLoginPress(){
    Actions.login();
  }
}

var style = StyleSheet.create({
  blurContainer: {
    flex: 1,
    alignSelf: 'stretch',
    left: 0,
    top: 0,
    opacity: 1,
    backgroundColor: 'transparent'
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 50,
    alignItems: 'center',
    borderColor: 'white',
    borderRadius: 5,
    borderWidth: 2,
    height: 40
  },
  backArrow: {
    width: 30,
    height: 20,
    justifyContent: 'center',
    flex: 1
  },
  loginButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    height: 36,
    borderWidth: 2,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    flex: 2
  },
  registerButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2
  },
  navigationText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12
  },
  footerContainer: {
    marginLeft: 30,
    marginRight: 30
  },
  facebookLogin: {
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 3,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  login: {
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 3,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50
  },
  inputContainer:{
    borderColor: 'white',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    marginLeft: 30,
    marginRight: 30
  },
	inputs:{
		width: 250,
		height: 20,
		margin: 10,
		color: 'white',
    fontWeight: "bold",
    fontSize: 12
	},
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginRight: 30,
    marginTop: 10
  },
  forgotPasswordText: {
    color: 'white',
    fontSize: 10
  },
  text: {
    color: 'white'
  },
	inputsContainer: {
		flex: 4,
		justifyContent:'center',
    alignSelf: 'stretch'
	},
	buttonContainer: {
		flex: 10,
		alignItems: 'flex-end'
	}
});
