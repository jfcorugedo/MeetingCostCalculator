import React, {Component} from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

class Attendees extends Component {


    static navigationOptions = {
        title: 'Attendees',
    };

    render() {
        return (
            <View>
                <Text>Add attendees screen!</Text>
                <TouchableOpacity onPress={ () => this.props.navigation.navigate('TimeTracking') }>
                    <Text>Go to TimeTracking screen!</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    startButton: {
        flex: 1,
        maxHeight: 80,
        backgroundColor: 'red',
    },
    attendeesContainer: {
        flex: 1,
        backgroundColor: 'lightblue'
    },
    form: {
        flex: 1,
        backgroundColor: 'orange',
        maxHeight: 120,
    },
});

export default Attendees;