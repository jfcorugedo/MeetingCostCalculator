import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import CoolButton from "./CoolButton";
import {connect} from 'react-redux';
import {addAttendee, resetMeeting} from "./redux/actions/actions";

class MeetingSummary extends React.Component {

    static navigationOptions = {
        title: 'Meeting summary',
    };

    render() {
        return (<View style={styles.container}>
            <Text style={[styles.summary, styles.gap]}>Total cost of this meeting </Text>
            <Text style={[styles.cost, styles.gap]}>{this.props.meetingCost} €</Text>
            <CoolButton
                label={'Reset'}
                action={() => {
                    this.props.dispatchResetMeeting();
                    this.props.navigation.popToTop();
                }}
            />
        </View>);
    }
}

const mapStateToProps = (state) => {
    return ({ meetingCost: state.meetingCost });
};

const mapDispatchToProps = {
    dispatchResetMeeting: () => resetMeeting()
};

export default connect(mapStateToProps, mapDispatchToProps)(MeetingSummary);

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