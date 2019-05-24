import React, {Component} from 'react';
import {Text} from 'react-native';

class MeetingSummary extends Component {

    static navigationOptions = {
        title: 'Meeting summary',
    };

    render() {
        return (
            <Text>Meeting summary screen!!</Text>
        );
    }
}

export default MeetingSummary;