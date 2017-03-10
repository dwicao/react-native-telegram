import React, { PureComponent } from 'react';
import { Actions, ActionConst } from 'react-native-router-flux';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import * as colors from '@colors';
import { myWidth, myHeight, CrossPlatformIcon } from '@utils';

class SplashScreen extends PureComponent {
    componentDidMount() {
        setTimeout(() => {
            Actions.mainScreen({
                type: ActionConst.RESET,
            });
        }, 300);
    }
    
    render() {
        return (
            <View style={styles.container}>
                <CrossPlatformIcon name="jet" size={myWidth * 0.5} color={colors.PRIMARY} />
                <Text style={styles.title}>
                    inTelegram
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        backgroundColor: 'transparent',
        fontSize: myWidth * 0.1,
    }
});

export default SplashScreen;