import React, { Component } from 'react';
import Dimensions from 'Dimensions';
import {
    View,
    TextInput,
    StyleSheet,
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as colors from '../../colors';
import imgSend from '../../images/send.png';

const { width, height } = Dimensions.get('window');

class Input extends Component {
    constructor() {
        super();

        this.state = {
            myMessage: '',
        };
    }

    _onChangeText = (text) => {
        this.setState({ myMessage: text });
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    placeholder='Message'
                    autoCapitalize='none'
                    underlineColorAndroid='transparent'
                    autoCorrect={false}
                    value={this.state.myMessage}
                    onChangeText={this._onChangeText}
                />
                { this.state.myMessage !== '' && (
                    <Icon name="send" size={width * 0.08} color="black" />
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    textInput: {
        width: width * 0.9,
        height: height * 0.07,
        paddingHorizontal: width * 0.02,
        backgroundColor: colors.BASIC,
    },
});

export default Input;