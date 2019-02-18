
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Drawer from 'react-native-drawer'

import Menu from "./Menu";
import Shop from "./Shop";

export default class Main extends Component {

  closeControlPanel = () => {
    this.drawer.close()
  };
  openControlPanel = () => {
    this.drawer.open()
  };

  render() {
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref }}
        content={<Menu navigation={this.props.navigation} />}
        openDrawerOffset={0.4}
        tapToClose={true}
      >
        <Shop open={this.openControlPanel.bind(this)} />
      </Drawer>
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
