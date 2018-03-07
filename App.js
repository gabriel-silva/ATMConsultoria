import React, { Component } from 'react';
import { Navigator } from 'react-native-deprecated-custom-components';
import CenaEmpresa from './src/components/CenaEmpresa';
import CenaClientes from './src/components/CenaClientes';
import CenaContatos from './src/components/CenaContatos';
import CenaPrincipal from './src/components/CenaPrincipal';

export default class App extends Component {
  render() {
    return (
      <Navigator
        //objeto de rota
        initialRoute={{ id: 'principal' }}
        //function de callback
        renderScene={(route, navigator) => {
          //definir a cena com base na rota

          if (route.id === 'principal') {
            return (
              <CenaPrincipal navigator={navigator} />
            );
          }

          if (route.id === 'cliente') {
            return (
              <CenaClientes navigator={navigator} />
            );
          }

          if (route.id === 'contato') {
            return (
              <CenaContatos navigator={navigator} />
            );
          }

          if (route.id === 'empresa') {
            return (
              <CenaEmpresa navigator={navigator} />
            );
          }

        }}
      />
    );
  }
}
