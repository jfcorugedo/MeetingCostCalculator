import React from 'react';
import {StyleSheet, View, ScrollView, Text, TextInput, TouchableOpacity} from 'react-native';

export default class Attendees extends React.Component {

    constructor() {
        super();
        this.state = {name: '', cost: 0};
    }
    render() {
        return (<View style={styles.container}>
            <Text style={styles.title}>Attendees</Text>
            <ScrollView style={styles.attendeesContainer}>
                <View style={styles.attendee}>
                    <Text style={styles.name}>Juan Fernandez-Corugedo Igual</Text>
                    <Text style={styles.cost}>50.0 €/hour</Text>
                </View>
            </ScrollView>
            <View style={styles.form}>
                <View style={styles.inputWrapper}>
                    <TextInput
                        placeholder="Name of the attendee"
                        value={this.state.name}
                        style={styles.inputText}
                        onChangeText={(name) => this.setState({name})} />

                    <TextInput
                        placeholder="Cost per hour"
                        value={this.state.cost === 0 ? '' : String(this.state.cost)}
                        keyboardType = 'numeric'
                        style={styles.inputText}
                        onChangeText={(cost) => this.setState({cost: Number(cost)})} />
                </View>
                <TouchableOpacity onPress={() => alert(this.state.name + ' ' + this.state.cost)}>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.addButton}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eef',
    },
    title: {
        paddingTop: 50,
        paddingBottom: 20,
        fontSize: 20,
        textAlign: 'center',
    },
    attendeesContainer: {
        flex: 1,
        borderTopWidth: 1,
        borderTopColor: '#999',
    },
    attendee: {
        padding: 20,
    },
    name: {
        fontSize: 18,
    },
    cost: {
        fontSize: 14,
        color: '#999',
    },
    form: {
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#999',
        height: 120,
        flexDirection: 'row',
    },
    inputWrapper: {
        flex: 1,
    },
    inputText: {
        height: 45,
        padding: 10,
        backgroundColor: '#ededed',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 30,
        marginBottom: 5,
    },
    buttonContainer: {
        width: 100,
        height: 100,
        backgroundColor: '#ededed',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderColor: '#ddd',
        borderWidth: 1,
        marginLeft: 10,
    },
    addButton: {
        fontSize: 28,
        lineHeight: 28,
    },
});