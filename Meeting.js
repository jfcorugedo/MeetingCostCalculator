import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default class Meeting extends React.Component {

    render() {
        return (<View style={styles.container}>
            <TouchableOpacity onPress={()  => this.props.navigation.navigate('TimeTracking') }>
                <View style={styles.startButton}>
                    <Text style={styles.startText}>Start meeting</Text>
                </View>
            </TouchableOpacity>
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
    startButton: {
        textAlign: 'center',
        backgroundColor: '#2f95dc',
        borderRadius: 10,
    },
    startText: {
        color: 'white',
        fontSize: 30,
        padding: 10,
    },
});