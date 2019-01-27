
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default class Authentication extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Authentication Component</Text>
        <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
          <Text>Back to Main</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
