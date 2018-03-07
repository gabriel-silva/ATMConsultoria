import React, { Component } from 'react';
import { Navigator } from 'react-native-deprecated-custom-components';
import CenaClientes from './src/components/CenaClientes';
import CenaPrincipal from './src/components/CenaPrincipal';

export default class App extends Component {
  render() {
    return (
      <Navigator
        //objeto de rota
        initialRoute={{ id: 'a' }}
        //function de callback
        renderScene={(route, navigator) => {
          //definir a cena com base na rota
          if (route.id === 'a') {
            return (
              <CenaPrincipal />
            );
          }

          if (route.id === 'b') {
            return (
              <CenaClientes />
            );
          }

        }}
      />
    );
  }
}
