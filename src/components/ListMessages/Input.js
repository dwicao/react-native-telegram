import React from 'react';
import Dimensions from 'Dimensions';
import {
    View,
    TextInput,
    StyleSheet,
    Image,
} from 'react-native';
import * as colors from '../../colors';
import imgSend from '../../images/send.png';

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
            <Image source={imgSend} style={styles.send} />
        </View>
    );
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
    send: {
        height: width * 0.08,
        width: width * 0.08,
    },
});

export default Input;