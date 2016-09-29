import React, {Component, StyleSheet, Text, View, ScrollView, Image, PixelRatio} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import Border from '../../Helpers/StyleBorderHelper';
import HomeComponentTabBar from './HomeComponentTabBar';
import TicketComponent from '../Tickets/TicketsComponent';

export default class HomeComponent extends React.Component{
  constructor(){
    super();
  }
  render(){
    var self = this;
    return(
      <View style={style.container}>
        <ScrollableTabView initialPage={0} style={style.tabView} renderTabBar={() => <HomeComponentTabBar navigator={this.props.navigator}/>}>
            <View tabLabel='BILETY' style={[style.card, Border('black')]}>
                <TicketComponent {...this.props} />
            </View>
            <View tabLabel='WYDARZENIA' style={[style.card, Border('black')]}>

            </View>
          </ScrollableTabView>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 10
  }
});
