import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import  { NavigationEvents } from 'react-navigation';
import CoolButton from "./CoolButton";

class TimeTracking extends React.Component {

    constructor() {
        super();
        this.state = {
            costPerDay: 100,
            currentCost: 0,
            startTime: Date.now(),
            endTime: undefined,
        };
    }

    tick() {
        this.setState({
            currentCost: this.state.currentCost + 10
        }, () => {
            this.timer = setTimeout(() => this.tick(), 1000)
        });
    }

    render() {
        return (
            <View style={ styles.container }>
                <NavigationEvents
                    onWillFocus={payload => {
                        console.log('will focus');
                        this.timer = setTimeout(() => this.tick(), 1000);
                    }}
                    onDidFocus={payload => console.log('did focus')}
                    onWillBlur={payload => {
                        console.log('will blur');
                        clearTimeout(this.timer);
                    }}
                    onDidBlur={payload => console.log('did blur')}
                />


                <Text style={styles.text}>{ this.state.currentCost } €</Text>
                <CoolButton
                    label={ 'End meeting' }
                    action={ () => this.props.navigation.goBack() }
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