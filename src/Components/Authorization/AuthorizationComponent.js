'use strict';
import React, {Component, StyleSheet, Text, View, ScrollView, TouchableOpacity, Icon, Animated, Image, Navigator} from 'react-native';
import ScrollableTabView, {ScrollableTabBar, DefaultTabBar} from 'react-native-scrollable-tab-view';
import ReactNativeBlur, {BlurView, VibrancyView} from 'react-native-blur';

import Border from '../../Helpers/StyleBorderHelper';
import LoginComponent from '../Authorization/LoginComponent';
import RegistrationComponent from '../Authorization/RegistrationComponent';

export default class AuthorizationComponent extends React.Component{
  render(){
    return (
      <BlurView blurType="dark" style={[style.container, Border('red')]}>
          <ScrollableTabView initialPage={0} renderTabBar={() => <TabBarComponent navigator={this.props.navigator}/>} style={style.tabView}>
            <View tabLabel='LOGIN' style={[style.card, Border('black')]}>
              <LoginComponent {...this.props}/>
            </View>
            <View tabLabel='REJESTRACJA' style={[style.card, Border('black')]}>
              <RegistrationComponent {...this.props}/>
            </View>
          </ScrollableTabView>
      </BlurView>
    )
  }
};


class TabBarComponent extends React.Component{
  propTypes: {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array
  };

  constructor(props){
    super(props);
    this.state = {
      selectedTabIcons: [],
      unselectedTabIcons: []
    }    
  }

  renderTabOption(name, page) {
    var isTabActive = this.props.activeTab === page;

          if (isTabActive) {
             return (
                <TouchableOpacity key={name} onPress={() => this.props.goToPage(page)} style={[style.tab]}>
                    <View style={[style.tabElem]}>
                        <Text name={name} style={style.selectedText}>{name}</Text>
                    </View>
                </TouchableOpacity>
            );
          }
          else {
            return (
                <TouchableOpacity key={name} onPress={() => this.props.goToPage(page)} style={[style.tab]}>
                    <View style={[style.tabElem]}>
                        <Text name={name} style={style.text}>{name}</Text>
                    </View>
                </TouchableOpacity>
            );
          }


  }
  goToStartPress(){
      this.props.navigator.push({name: 'start'});
  }

  render() {
    var containerWidth = this.props.containerWidth - 120;
    var numberOfTabs = this.props.tabs.length;
 
    return (
        <View style={[style.tabsContainer]}>
          <View style={style.backArrowContainer}>
            <TouchableOpacity onPress={() => this.goToStartPress()}>
            	<Image source={{ uri: 'BackArrow', isStatic: true }} style={style.backArrow} />
            </TouchableOpacity>
          </View>
          <View style={[style.tabs]} ref='tabs'>
             {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}           
          </View>
        </View>
    );
  }
};

var style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "transparent"
  },
  tabsContainer: {
    height: 40,
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    borderWidth : 2,
    borderRadius: 4,
    borderColor: 'white'
  },
  backArrowContainer: {
    flex: 1,
    height: 38,
    borderRightWidth: 1,
    borderColor: 'white',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center'   
  },
  backArrow: {
    width:20,
    height:20,
    marginRight: 4
  },
  tabs: {
    flex: 4,
    flexDirection: 'row'
  },
  tab: {
   flex: 1,
   flexDirection: 'row',
   justifyContent: 'flex-end',
   alignItems: 'center',
   borderRightWidth: 1,
   borderColor: 'white'
  },
  tabElem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  selectedText: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold'
  },
  text: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold'
  },
  tabView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  card: {
    flex: 1,
    alignSelf: 'stretch',
    
  },
});
