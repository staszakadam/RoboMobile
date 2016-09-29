import React, {Component, View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default class TicketComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={style.container}>
                <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 10}}>
                    <Icon name="ios-pricetag" size={40} color='#336699'/>       
                </View>
                <View style={{paddingLeft: 15}}>
                    <Text style={{fontWeight: 'bold', color:'#336699'}}>{this.props.name}</Text>
                    <Text>{this.props.description}</Text>
                    <View style={style.dateRow}>
                        <Icon name="ios-time" size={20} color='#336699'/>           
                        <Text>  {this.props.date}</Text>
                    </View>
                </View>   
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'lightgray',
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10
    },
    dateRow: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});