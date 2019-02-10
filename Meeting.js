import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import CoolButton from "./CoolButton";

export default class Meeting extends React.Component {

    render() {
        return (<View style={styles.container}>
            <CoolButton
                action={ ()  => this.props.navigation.navigate('TimeTracking') }
                label={'Start meeting'}
            />
        </View>);
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
});