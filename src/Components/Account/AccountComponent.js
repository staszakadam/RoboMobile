import React, {Component, View, Text, StyleSheet, TouchableOpacity, PixelRatio} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

export default class AccountComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nip: '772-222-33-00',
            name: 'Jan',
            surname: 'Kowalski',
            email: 'jan.kowalski@gmail.com',
            acn: '12345'
        }
    }
    render(){
        return(
            <View style={style.container}>
                <View style={style.topContainer}>
                    <View style={style.topTopContainer}>
                        <View style={{flex: 1, width: 250, justifyContent: 'center', alignItems: 'center'}}>
                            <Icon name="ios-person" size={80} color='white'/>           
                            <Text style={[style.text,{fontSize: 20}]}>{this.state.name} {this.state.surname}</Text>
                            <Text style={[style.text,{fontSize: 15}]}>{this.state.email}</Text>
                        </View>                           
                    </View> 
                 <View style={[style.topBottomContainer, {flex: 1, flexDirection: 'row', justifyContent: 'center'}]}>
                    <View style={{flex: .5, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', paddingLeft: 15}}>
                        <Icon name="man" size={20} color='white'/>          
                        <Text style={[style.text, {fontSize: 14, fontWeight: 'bold'}]}>  ACN: </Text>           
                        <Text style={[style.text, {fontSize: 12}]}>{this.state.acn}</Text>   
                    </View>     
                    <View style={{flex: .5, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', paddingRight: 15}}>
                        <Text style={[style.text, {fontSize: 14, fontWeight: 'bold'}]}>NIP: </Text>           
                        <Text style={[style.text, {fontSize: 12}]}>{this.state.nip}</Text>    
                    </View> 
                 </View>
                </View>
                <View style={style.bottomContainer}>
                    <TouchableOpacity style={style.button}>
                         <Text style={{fontWeight: 'bold', color:'#3B5998'}}>Pomoc</Text>                         
                    </TouchableOpacity>
                    <TouchableOpacity style={style.button}>
                         <Text style={{fontWeight: 'bold', color:'#3B5998'}}>Wprowadzenie</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[style.button, {flexDirection: 'row'}]} onPress={this.onLogoutPress.bind(this)}>
                         <View><Icon name="ios-locked" size={20} color='#3B5998'/></View>                                 
                         <Text style={{fontWeight: 'bold', color:'#3B5998'}}> Wyloguj</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    onLogoutPress(){
        this.props.navigator.push({name: 'authorization'});
    }
}

const style = StyleSheet.create({
   container: {
       flex: 1,      
       backgroundColor: 'white',
   },
   topContainer: {
      flex: .5,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#3B5998',     
   },
   topTopContainer: {
       flex:4,
   },
   topBottomContainer:{
       flex: 1,
       backgroundColor: '#336699',
       alignSelf: 'stretch'
   },
   bottomContainer: {
      flex: .5,
      paddingTop: 10
   },
   text: {
       color: 'white'
   },
   button: {
       flex: .3,
       justifyContent: 'center',
       alignItems: 'center',
       borderWidth: 3,
       borderRadius: 3,
       borderColor: '#3B5998',     
       marginLeft: 20,
       marginRight: 20,
       marginBottom: 15
   } 
});