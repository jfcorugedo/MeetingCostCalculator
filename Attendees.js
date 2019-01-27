import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class Attendees extends React.Component {

    render() {
        return (<View style={styles.container}>
            <Text>Form to create attendees 2</Text>
        </View>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});