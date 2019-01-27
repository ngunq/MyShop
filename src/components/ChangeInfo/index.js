
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class ChangeInfo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ChangeInfo Component</Text>
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
