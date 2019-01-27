import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

export default class Attendees extends React.Component {

    constructor() {
        super();
        this.state = {name: '', salary: 0};
    }
    render() {
        return (<View style={styles.container}>
            <TextInput
                placeholder="Name of the attendee"
                style={styles.inputText}
                onChangeText={(name) => this.setState({name})} />

                <Text>{this.state.name}</Text>
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