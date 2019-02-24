import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import  { NavigationEvents } from 'react-navigation';
import CoolButton from "./CoolButton";

class TimeTracking extends React.Component {

    constructor() {
        super();
        this.state = {
            costPerSecond: 0.134,
            currentCost: 0,
            startTime: Date.now(),
        };
    }

    tick() {
        const timeInSeconds = (Date.now() - this.state.startTime)/1000;

        this.setState({
            currentCost: this.state.costPerSecond * timeInSeconds
        }, () => {
            this.timer = setTimeout(() => this.tick(), 1000)
        });
    }

    render() {
        return (
            <View style={ styles.container }>
                <NavigationEvents
                    onWillFocus={() => {
                        console.log('will focus');
                        this.tick();
                    }}
                    onDidFocus={() => console.log('did focus')}
                    onWillBlur={() => {
                        console.log('will blur');
                        clearTimeout(this.timer);
                    }}
                    onDidBlur={() => console.log('did blur')}
                />


                <Text style={styles.text}>{ Number(this.state.currentCost).toFixed(2) } €</Text>
                <CoolButton
                    label={ 'End meeting' }
                    action={ () => this.props.navigation.navigate('MeetingSummary') }
                />
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
    text: {
        fontSize: 50,
        fontWeight: 'bold',
        padding: 20,
    },
});

export default TimeTracking;