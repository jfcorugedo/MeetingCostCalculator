import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

class TimeTracking extends Component {

    static navigationOptions = {
        title: 'Meeting running',
    };

    render() {
        return (
            <View>
                <Text>Time tracking screen!!</Text>
                <TouchableOpacity onPress={ () => this.props.navigation.navigate('MeetingSummary')}>
                    <Text>Go to MeetingSummary!!!</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default TimeTracking;