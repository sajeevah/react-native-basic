import React, { Component } from 'react';
import { View } from 'react-native';
import Greeting from './Greeting';

class LotsOfGreetings extends Component {
    render() {
        return (
            <View style={{alignItems: 'center', top: 50}}>
                <Greeting name='Rexxar' />
                <Greeting name='Jaina' />
                <Greeting name='Valeera' />
            </View>
        );
    }
}

export default LotsOfGreetings;