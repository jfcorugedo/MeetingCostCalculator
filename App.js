import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

import TabBarIcon from './TabBarIcon';
import Attendees from './Attendees';
import Meeting from './Meeting';
import TimeTracking from "./TimeTracking";

Attendees.navigationOptions = {
  tabBarLabel: 'Create',
  tabBarIcon: ({focused}) => (
      <TabBarIcon
          focused={focused}
          name={'md-person-add'}
      />
  ),
};

const MeetingStack = createStackNavigator(
    {
        Meeting: Meeting,
        TimeTracking: TimeTracking,
    },
    {
        initialRouteName: 'Meeting',
    }
);

MeetingStack.navigationOptions = {
    tabBarLabel: 'Meeting',
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
// - Create Meeting file with baisc style and content
// - Add meeting to the tab navigation
export default createAppContainer(createBottomTabNavigator({
    Attendees,
    MeetingStack
}));


