import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

class FlatListBasics extends Component {

    state = {
        names : [
            {key: 'Devin'},
            {key: 'Dan'},
            {key: 'Dominic'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
        ]
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.names}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

export default FlatListBasics;