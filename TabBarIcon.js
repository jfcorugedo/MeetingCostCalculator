import React from 'react';
import { Icon } from 'expo';

export default class TabBarIcon extends React.Component {
    render() {
        return (
            <Icon.Ionicons
                name={this.props.name}
                size={26}
                style={{ marginBottom: -3 }}
                color={this.props.focused ? '#2f95dc' : '#ccc'}
            />
        );
    }
}