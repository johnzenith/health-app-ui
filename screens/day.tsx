import React from 'react';

import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const Day = (props: {dayname: string, active: string}) => {
    return (
        <View style={styles.box1}>
            <View style={{ borderRadius: 10, padding: 5, backgroundColor: props.active }}>
                <Text style={{ color: '#fff' }}>
                    {props.dayname}
                </Text>
            </View>
        </View>
    );
};

export default Day;

const styles = StyleSheet.create({
    box1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});