import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'

class Menu extends Component {
    state = {}
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'blue' }}>
                <Text>Component Menu</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('AUTHENTICATION')}>
                    <Text>Go to Authentication</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('CHANGE_INFO')}>
                    <Text>Go to ChangeInfo</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ORDER_HISTORY')}>
                    <Text>Go to OrderHistory</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Menu;