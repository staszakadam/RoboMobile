/* @flow */
'use strict'
import React, {Component, Switch, StyleSheet, View, Text, TextInput, Image, TouchableOpacity} from 'react-native';

import RouterFlux from 'react-native-router-flux';
const {Actions} = RouterFlux;

import CheckBox from 'react-native-checkbox';
import ItemCheckbox from 'react-native-item-checkbox';

import Button from 'react-native-button';
import Border from '../../Helpers/StyleBorderHelper';
import LoginService from '../../Services/LoginService';
import PorductService from '../../Services/ProductsService';

import ReactNativeBlur, {BlurView, VibrancyView} from 'react-native-blur';
import BackgroundComponent from '../Misc/BackgroundComponent';

import { LogIn, LogOut } from '../../Actions/AuthAction';

export default class LoginComponent extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        email: 'spsupport7',
        password: 'sputnik123'
      }
    }
    render() {
      var self = this;
        return (
          <View style={[style.container, Border('purple')]}>
            <View style={[style.inputsContainer, Border('green')]}>
                <View style={style.inputContainer}>
                    <TextInput
                        placeholder='EMAIL'
                        placeholderTextColor='white'
                        clearButtonMode='never'
                        style={style.inputs}
                        onChangeText={(email) => this.setState({email})}
                        value={this.state.email} />
                </View>
                <View style={[style.inputContainer, {marginTop: 30}]}>
                    <TextInput
                        placeholder='HASŁO'
                        placeholderTextColor='white'
                        clearButtonMode='never'
                        stPyle={style.inputs}
                        onChangeText={(password) => this.setState({password})}
                    value={this.state.password} />
                </View>
                <View style={style.forgotPasswordContainer}>
                    <TouchableOpacity onPress={self.onLoginPress.bind(this)}>
                        <Text style={style.forgotPasswordText}>nie pamiętam hasła</Text>
                    </TouchableOpacity>
                </View>
                <View style={[{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end', paddingBottom: 20}, Border('blue')]}>
                    <Text style={style.termAcceptText}>Zaponałem się z</Text>
                    <Text style={{color: 'white', fontSize: 10}}> Warunkami Serwisu</Text>          
                </View>
              </View>
              <View style={[style.footerContainer, Border('silver')]}>              
                <View style={style.facebookLogin}>
                    <TouchableOpacity onPress={self.onLoginPress.bind(this)}>
                        <Text style={style.navigationText}>Zaloguj przez Facebook</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.login}>
                    <TouchableOpacity onPress={self.onLoginPress.bind(this)}>
                        <Text style={style.navigationText}>Zaloguj się</Text>
                    </TouchableOpacity>
                </View>
             </View>
         </View>);
    }
    onLoginPress(){
      var self = this;
       //self.props.navigator.push({name: 'main'});
      var loginPromise = LoginService.login(this.state.email, this.state.password);
      loginPromise.then(function(result){
         var isOk = result.status;
         if (isOk == 200)
         {
            self.props.store.dispatch(LogIn(true, 'testowy hash'));
            self.props.navigator.push({name: 'main'});             
         }
         else
         {
             console.log('Błąd Logowania');
         }


      });
    }
   
   
    onRegistrationPress(){
      Actions.registration();
  }
    onBackPress(){
      Actions.start();
    }
}

var style = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor: 'transparent',

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
    justifyContent: 'flex-end',
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
    borderColor: 'gray',
    borderWidth: 0.5,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    marginLeft: 20,
    marginRight: 20
  },
  inputs:{
    width: 250,
	height: 20,
	margin: 10,
	color: 'white'
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginRight: 30,
    marginTop: 15
  },
  forgotPasswordText: {
    color: 'gray',
    fontSize: 8
  },
  termAcceptText: {
    color: 'gray',
    fontSize: 8
  },
  text: {
    color: 'white'
  },
  inputsContainer: {
	flex: 4,
    paddingTop: 50 
  },
  buttonContainer: {
	flex: 10,
	alignItems: 'flex-end'
}
});
