import React from 'react';
import { View, StyleSheet, Animated } from 'react-native'
import CoolButton from "../components/CoolButton";

export default class LastMeetings extends React.Component {

    static navigationOptions = {
        title: 'Last meetings',
    };

    constructor(props) {
        super(props);
        this.springValue = new Animated.Value(1);
    }

    spring () {
        this.springValue.setValue(0.3);
        Animated.spring(
            this.springValue,
            {
                toValue: 1,
                friction: 1,
                useNativeDriver: true
            }
        ).start()
    }

    render() {
        return (<View style={styles.container}>
            <CoolButton
                label={'Spring'}
                action={() => this.spring()}
            />
            <Animated.Image
                style={{ marginTop: 50, width: 340.5, height: 300, transform: [{scale: this.springValue}] }}
                source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}/>
        </View>);
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
});