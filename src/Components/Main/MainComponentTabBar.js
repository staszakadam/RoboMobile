import React, {Component, View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class MainComponentTabBar extends React.Component{
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
    if (isTabActive){
      return (
        <TouchableOpacity key={name + page} onPress={() => this.props.goToPage(page)} style={[style.selectTabElem]} >
           <Icon name={name} size={50} color='white'/>           
        </TouchableOpacity>
      );
    }
    else{
        return (
        <TouchableOpacity key={name + page} onPress={() => this.props.goToPage(page)} style={style.tabElem} >
           <Icon name={name} size={50} color='#3B5998'/>           
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
        <View >
          <View style={style.container} ref='tabs'>
             {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
          </View>
        </View>
    );
  }
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',        
        height: 100
    },
    tabElem: {      
        flex: 0.4, 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'   
    },
    selectTabElem: {      
        flex: 0.4, 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3B5998'   
    }
});