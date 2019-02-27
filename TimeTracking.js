import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import  { NavigationEvents } from 'react-navigation';
import CoolButton from "./CoolButton";
import {connect} from 'react-redux';
import {updateMeetingCost} from "./redux/actions/actions";

class TimeTracking extends React.Component {

    constructor() {
        super();
        this.state = {
            currentCost: 0,
            startTime: Date.now(),
        };
    }

    tick() {
        const timeInSeconds = (Date.now() - this.state.startTime)/1000;

        this.setState({
            currentCost: this.props.costPerSecond * timeInSeconds
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
                    action={ () => {
                        this.props.dispatchUpdateMeetingCost(this.state.currentCost);
                        this.props.navigation.navigate('MeetingSummary')
                    } }
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

const mapStateToProps = (state) => {
    const costPerSecond = state.attendees
        .map(attendee => Number(attendee.cost))
        .reduce( (accumulator, cost) => accumulator + cost) / (60*60);
    console.log('costPerSecond', costPerSecond);
    return ({ costPerSecond });
};

const mapDispatchToProps = {
    dispatchUpdateMeetingCost: (cost) => updateMeetingCost(cost)
};

export default connect(mapStateToProps, mapDispatchToProps)(TimeTracking);