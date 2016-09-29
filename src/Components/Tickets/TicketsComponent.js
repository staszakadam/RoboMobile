import React, {Component, StyleSheet, View, Text, ListView, ScrollView} from 'react-native';
import RefreshableListView from 'react-native-refreshable-listview';
import TicketComponent from './TicketComponent';
import ProductService from '../../Services/ProductsService';

export default class TicketsComponent extends React.Component {
   constructor(props){
        super(props);
        let aaa =  this.getData();
        let test = 'asdasd';

    }
    async getData(){
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var ps = new ProductService();
        let test = ps.getProducts();
        // ProductsService.getProducts().then(function(result){
        //     var products = JSON.parse(result._bodyText).Result;
        //     this.state = {
        //         dataSource: ds.cloneWithRows(products.Events)
        //     }
        // });
        //   this.state = {
        //         dataSource: ds.cloneWithRows([{}])
        //     }
        var kot = 'll';
        return null;
    }
    renderTicketRow(rowData){
        return(
            <TicketComponent name={rowData.name} date={rowData.date} description={rowData.description}/>
        )
    }
    render(){
        return(
            <ScrollView style={style.container}>
                <ListView 
                    dataSource={this.state.dataSource}
                    renderRow={this.renderTicketRow}/>
            </ScrollView>     
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        // /backgroundColor: 'yellow'
    }
});