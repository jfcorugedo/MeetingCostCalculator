import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import TabBarIcon from './TabBarIcon';
import Attendees from './Attendees';
import Meeting from './Meeting';

Attendees.navigationOptions = {
  tabBarLabel: 'Create',
  tabBarIcon: ({focused}) => (
      <TabBarIcon
          focused={focused}
          name={'md-person-add'}
      />
  ),
};

Meeting.navigationOptions = {
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
    Meeting
}));


