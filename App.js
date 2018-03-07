import React, { Component } from 'react';
import { Navigator } from 'react-native-deprecated-custom-components';
import CenaServicos from './src/components/CenaServicos';
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

          switch (route.id) {
            case 'principal': return (<CenaPrincipal navigator={navigator} />); break;
            case 'cliente': return (<CenaClientes navigator={navigator} />); break;
            case 'contato': return (<CenaContatos navigator={navigator} />); break;
            case 'empresa': return (<CenaEmpresa navigator={navigator} />); break;
            case 'servico': return (<CenaServicos navigator={navigator} />); break;
          }

        }}
      />
    );
  }
}
