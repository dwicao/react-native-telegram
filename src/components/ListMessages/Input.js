import React, { Component } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as colors from '@colors';
import { myHeight, myWidth, CrossPlatformIcon } from '@utils';

class Input extends Component {
    constructor() {
        super();

        this.state = {
            myMessage: '',
        };

        this._onPressSend = this._onPressSend.bind(this);
    }

    _onChangeText = (text) => {
        this.setState({ myMessage: text });
    }

    _onPressSend() {
        alert('send be pressed');
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
                    <TouchableOpacity onPress={this._onPressSend} style={styles.buttonSend}>
                        <CrossPlatformIcon name="send" size={myWidth * 0.08} color={colors.PRIMARY} />
                    </TouchableOpacity>
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
        width: myWidth * 0.9,
        height: myHeight * 0.07,
        paddingHorizontal: myWidth * 0.02,
        backgroundColor: colors.BASIC,
    },
    buttonSend: {
    },
});

export default Input;