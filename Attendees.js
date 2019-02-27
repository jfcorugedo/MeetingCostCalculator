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
import CoolButton from './CoolButton';
import {connect} from 'react-redux';
import {addAttendee} from "./redux/actions/actions";

class Attendees extends React.Component {

    static navigationOptions = {
        title: 'Attendees',
    };

    constructor() {
        super();
        this.state = {name: '', cost: ''};
    }

    addAttendee(name, cost) {
        this.props.dispatchAddAttendee(name, cost);
        this.setState({name: '', cost: ''})
    }
    render() {
        const {attendees} =  this.props;

        return (<View style={styles.container}>
            <View style={[styles.startButton]}>
                <CoolButton
                    buttonStyle={attendees.length > 0 ? [styles.enabled] : [styles.disabled]}
                    textStyle={attendees.length > 0 ? [{color: 'white'}] : [{color: 'black'}]}
                    label={"Start meetig"}
                    action={ ()  => attendees.length > 0 ? this.props.navigation.navigate('TimeTracking') : alert('You need to specify at least one participant') } />
            </View>

            <ScrollView style={styles.attendeesContainer}>
                {
                    attendees.map(
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

const mapStateToProps = (state) => {
    return ({ attendees: state.attendees });
};

const mapDispatchToProps = {
    dispatchAddAttendee: (name, cost) => addAttendee(name, cost)
};

export default connect(mapStateToProps, mapDispatchToProps)(Attendees);

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
                keyboardType = 'number-pad'
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
    attendeesContainer: {
        flex: 1,
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
    startButton: {
        flex: 1,
        maxHeight: 80,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    disabled: {
        backgroundColor: '#ededed',
    },
    enabled: {

    },
});