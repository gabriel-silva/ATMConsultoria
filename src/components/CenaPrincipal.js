import React, { Component } from 'react';
import {
    View,
    StatusBar,
    Image,
    StyleSheet,
    TouchableHighlight
} from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const logo = require('../imgs/logo.png');
const menuCliente = require('../imgs/menu_cliente.png');
const menuContato = require('../imgs/menu_contato.png');
const menuEmpresa = require('../imgs/menu_empresa.png');
const menuServico = require('../imgs/menu_servico.png');

export default class CenaPrincipal extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#CCC' />
                <BarraNavegacao />

                <View style={styles.logo}>
                    <Image source={logo} />
                </View>

                <View style={styles.menu}>

                    <View style={styles.menuGrupo}>

                        <TouchableHighlight
                            onPress={() => {
                                this.props.navigator.push({ id: 'cliente' });
                            }}>
                            <Image style={styles.imgMenu} source={menuCliente} />
                        </TouchableHighlight>

                        <TouchableHighlight
                            onPress={() => {
                                this.props.navigator.push({ id: 'contato' });
                            }}>
                            <Image style={styles.imgMenu} source={menuContato} />
                        </TouchableHighlight>

                    </View>

                    <View style={styles.menuGrupo}>
                        <Image style={styles.imgMenu} source={menuEmpresa} />
                        <Image style={styles.imgMenu} source={menuServico} />
                    </View>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    logo: {
        marginTop: 30,
        alignItems: 'center'
    },
    menu: {
        alignItems: 'center',

    },
    menuGrupo: {
        flexDirection: 'row'
    },
    imgMenu: {
        margin: 15
    },
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    }
});