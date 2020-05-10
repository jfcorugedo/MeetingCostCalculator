import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack'

import TabBarIcon from '../components/TabBarIcon';
import Attendees from '../screens/Attendees';
import TimeTracking from '../screens/TimeTracking';
import MeetingSummary from '../screens/MeetingSummary';
import LastMeetings from '../screens/LastMeetings';
import SettingsScreen from '../screens/SettingsScreen';

const AttendeesStack = createStackNavigator(
    {
        Attendees,
        TimeTracking,
        MeetingSummary,
    },
    {
        initialRouteName: 'Attendees'
    }
);

AttendeesStack.navigationOptions = {
    tabBarLabel: 'Start a meeting',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={'md-person-add'}
        />
    ),
};

const MeetingStack = createStackNavigator(
    {
        LastMeetings: LastMeetings,
    },
    {
        initialRouteName: 'LastMeetings',
    }
);

MeetingStack.navigationOptions = {
    tabBarLabel: 'Last meetings',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={'md-people'}
        />
    ),
};

const SettingsStack = createStackNavigator({
    Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
        />
    ),
};

export default createBottomTabNavigator({
    AttendeesStack,
    MeetingStack,
    SettingsStack,
});
