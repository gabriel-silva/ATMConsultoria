import React, { Component } from 'react';
import {
  View,
  StatusBar
} from 'react-native';
import BarraNavegacao from './src/components/BarraNavegacao';

export default class App extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor='#CCC' />
        <BarraNavegacao />
      </View>
    );
  }
}
