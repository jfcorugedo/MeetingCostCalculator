import React from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';

export default class Attendees extends React.Component {

    constructor() {
        super();
        this.state = {name: '', cost: '', attendees: []};
    }

    addAttendee(name, cost) {
        this.setState({attendees: [...this.state.attendees, {name, cost}], name: '', cost: ''})
    }
    render() {
        return (<View style={styles.container}>
            <Text style={styles.title}>Attendees</Text>
            <ScrollView style={styles.attendeesContainer}>
                {
                    this.state.attendees.map(
                        (attendee, index) =>(
                            <View style={styles.attendee} key={index}>
                                <Image source={require('./assets/attendee_icon.png')} style={{width: 50, height: 50, marginRight: 10}}/>
                                <View>
                                    <Text style={styles.name}>{attendee.name}</Text>
                                    <Text style={styles.cost}>{attendee.cost} €/hour</Text>
                                </View>
                            </View>
                        )
                    )
                }
            </ScrollView>
            <AttendantForm
                name={ this.state.name }
                cost={ this.state.cost }
                onNameChange={ (name) => this.setState({name}) }
                onCostChange={ cost => this.setState({cost}) }
                addAttendee={ () =>  this.addAttendee(this.state.name, this.state.cost) }
                />
        </View>);
    }
}

const AttendantForm = ( {name, onNameChange, cost, onCostChange, addAttendee} ) => (
    <View style={styles.form}>
        <View style={styles.inputWrapper}>
            <TextInput
                placeholder="Name of the attendee"
                value={name}
                style={styles.inputText}
                onChangeText={onNameChange} />

            <TextInput
                placeholder="Cost per hour"
                value={cost}
                keyboardType = 'numeric'
                style={styles.inputText}
                onChangeText={ onCostChange } />
        </View>
        <TouchableOpacity onPress={ addAttendee }>
            <View style={styles.buttonContainer}>
                <Text style={styles.addButton}>+</Text>
            </View>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
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
        fontSize: 20,
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