import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class TimeTracking extends React.Component {

    render() {
        return (
            <View style={ styles.container }>
                <Text>Tracking time....</Text>
            </View>
        );
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

export default TimeTracking;