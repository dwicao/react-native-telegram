import React from 'react';
import Dimensions from 'Dimensions';
import {
    View,
    TextInput,
    StyleSheet,
} from 'react-native';
import * as colors from '../../colors';

const { width, height } = Dimensions.get('window');

const Input = props => {

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder='Message'
                autoCapitalize='none'
                autoCorrect={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
       // marginBottom: height * 0.035,
    },
    textInput: {
        height: height * 0.07,
        padding: width * 0.02,
        backgroundColor: colors.BASIC,
    },
});

export default Input;