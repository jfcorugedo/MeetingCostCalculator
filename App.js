import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

import TabBarIcon from './TabBarIcon';
import Attendees from './Attendees';
import LastMeetings from './LastMeetings';
import TimeTracking from "./TimeTracking";
import MeetingSummary from './MeetingSummary';

const AttendeesStack = createStackNavigator(
    {
        Attendees: Attendees,
        TimeTracking: TimeTracking,
        MeetingSummary: MeetingSummary,
    },
    {
        initialRouteName: 'Attendees',
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
        TimeTracking: TimeTracking,
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

// - Create Attendees file with basic style and content
// - Create an AppContainer
// - createBottomTabNavigator
// - TabBarIcon component and navigationOptions
// - Create LastMeetings file with baisc style and content
// - Add meeting to the tab navigation
export default createAppContainer(createBottomTabNavigator({
    AttendeesStack,
    MeetingStack
}));


