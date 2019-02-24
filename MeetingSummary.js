import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import CoolButton from "./CoolButton";

export default class MeetingSummary extends React.Component {

    static navigationOptions = {
        title: 'Meeting summary',
    };

    constructor() {
        super();
        this.state = {cost: '5346.2'};
    }

    render() {
        return (<View style={styles.container}>
            <Text style={[styles.summary, styles.gap]}>Total cost of this meeting </Text>
            <Text style={[styles.cost, styles.gap]}>{this.state.cost}</Text>
            <CoolButton
                label={'End meeting'}
                action={() => this.props.navigation.popToTop()}
            />
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
    summary: {
        fontSize: 22,
    },
    cost: {
        fontWeight: 'bold',
        color: '#2f95dc',
        fontSize: 32
    },
    gap: {
        paddingBottom: 10,
    },
});