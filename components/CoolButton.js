import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

const CoolButton = ({label, action, buttonStyle = [], textStyle = []}) => (
    <TouchableOpacity onPress={ action }>
        <View style={[styles.startButton, ...buttonStyle]}>
            <Text style={[styles.startText, ...textStyle]}>{label}</Text>
        </View>
    </TouchableOpacity>
);

export default CoolButton;

const styles = StyleSheet.create({
    startButton: {
        textAlign: 'center',
        backgroundColor: '#2f95dc',
        borderRadius: 10,
    },
    startText: {
        color: 'white',
        fontSize: 30,
        padding: 10,
    },
});