
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Main Component</Text>
        <TouchableOpacity onPress={() => {this.props.navigation.navigate("AUTHENTICATION")}}>
          <Text>Go to Authentication</Text>
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
