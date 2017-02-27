import React from 'react';
import Dimensions from 'Dimensions';
import {
    View,
    TextInput,
    StyleSheet,
} from 'react-native';
import KeyboardSpacer from '../KeyboardSpacer';
import * as colors from '../../colors';

const { width, height } = Dimensions.get('window');

const Input = props => {

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder='Message'
                autoCapitalize='none'
                underlineColorAndroid='transparent'
                autoCorrect={false}
            />
            <KeyboardSpacer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
    },
    textInput: {
        height: height * 0.07,
        paddingHorizontal: width * 0.02,
        backgroundColor: colors.BASIC,
    },
});

export default Input;