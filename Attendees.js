import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

export default class Attendees extends React.Component {

    render() {
        return (<View style={styles.container}>
            <TextInput placeholder="Name of the attendee" style={styles.inputText} maxLength={300} />
        </View>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eef',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputText: {
        height: 50,
        width: '90%',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        fontSize: 30,
    },
});