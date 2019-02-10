import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default class Meeting extends React.Component {

    render() {
        return (<View style={styles.container}>
            <TouchableOpacity onPress={() => alert('starting the meeting....')}>
                <View style={styles.startButton}>
                    <Text style={styles.startText}>Start meting</Text>
                </View>
            </TouchableOpacity>
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
    startButton: {
        textAlign: 'center',
        backgroundColor: '#2f95dc',
        borderRadius: 10,
    },
    startText: {
        color: 'white',
        fontSize: 30,
        padding: 10,
    },
});