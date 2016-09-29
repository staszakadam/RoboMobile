import React, {Component, StyleSheet, Text, View, ScrollView, Image, PixelRatio} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import Border from '../../Helpers/StyleBorderHelper';
import MainComponentTabBar from '../Main/MainComponentTabBar';

import HomeComponent from '../Home/HomeComponent';
import AccountComponent from '../Account/AccountComponent'

export default class MainComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLogin: false
        }
    }
    render(){
        return(
            <View style={[style.container, Border('green')]}>
                <View style={[style.header, Border('yellow')]}>
                   <Image source={{ uri: 'Logo_horizontal', isStatic: true }} style={[style.logo, Border('blue')]} />
                </View>
                <View style={[style.content, Border('red')]}>
                     <ScrollableTabView initialPage={0} tabBarPosition="bottom" renderTabBar={() => <MainComponentTabBar navigator={this.props.navigator}/>}>
                        <View tabLabel='ios-home'>
                                <HomeComponent {...this.props}/>
                        </View>
                        <View tabLabel='ios-person' style={style.accountContainer}>
                                <AccountComponent {...this.props}/>
                        </View>
                        <ScrollView tabLabel='ios-list'>
                                <Text>3</Text>
                        </ScrollView>
                        <ScrollView tabLabel='ios-cart'>
                                <Text>4</Text>
                        </ScrollView>
                    </ScrollableTabView>
                </View>
            </View>
        )
    }
}



const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 25,
        backgroundColor: 'white'
    },
    header:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'lightgray',
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        paddingBottom: 8
    },
    content:{
        flex: 12
    },
    accountContainer: {
        flex: 1
    },
    logo:{
       	width: PixelRatio.getPixelSizeForLayoutSize(65),
		height: PixelRatio.getPixelSizeForLayoutSize(20),
    }
});
