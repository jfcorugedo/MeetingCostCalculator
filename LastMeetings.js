import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import CoolButton from "./CoolButton";

export default class LastMeetings extends React.Component {

    static navigationOptions = {
        title: 'Last meetings',
    };

    render() {
        return (<View style={styles.container}>
            <Text>Unimplemented</Text>
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