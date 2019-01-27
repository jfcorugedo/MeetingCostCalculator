import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

export default class Meeting extends React.Component {

    render() {
        return (<View style={styles.container}>
            <Text>View cost of the current meeting....</Text>
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