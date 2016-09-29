import React, {Component, View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';

export default class HomeComponentTabBar extends React.Component{
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
    var tabStyle;
    if (page == 0)
    {
        tabStyle = {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',   
            borderColor: '#3B5998',
            borderRightWidth: 2,
        };
    }   
    else {
        tabStyle = {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',   
            borderColor: '#3B5998'
        };
    }
    if (isTabActive) {
      return (
        <TouchableOpacity key={name} onPress={() => this.props.goToPage(page)} style={[tabStyle]}>
            <View style={[style.tabElem]}>
                <Text name={name} style={style.selectedText}>{name}</Text>
            </View>
       </TouchableOpacity>
       );
    }
    else {
      return (
        <TouchableOpacity key={name} onPress={() => this.props.goToPage(page)} style={[tabStyle]}>
           <View style={[style.tabElem]}>
               <Text name={name} style={style.text}>{name}</Text>
           </View>
       </TouchableOpacity>
     );
    }
  }
  render() {
    return (
        <View style={[style.tabsContainer]}>        
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
    height: 60,
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    borderWidth : 3,
    borderRadius: 4,
    borderColor: '#3B5998'
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
   borderColor: '#3B5998'
  },
  tabElem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  selectedText: {
    color: '#3B5998',
    fontSize: 16,
    fontWeight: 'bold'
  },
  text: {
    color: '#3B5998',
    fontSize: 13,
    fontWeight: 'bold'
  }
});
