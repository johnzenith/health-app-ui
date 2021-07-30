import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    ImageSourcePropType
} from 'react-native';
import * as Animatable from 'react-native-animatable';

const Scroll = (props: {
    title:           string,
    month:           string,
    duration?:       number,
    animation:       string,
    background:      ImageSourcePropType,
    backgroundColor: string
}) => {
    return (
        <Animatable.View
            animation={props.animation}
            duration={props.duration || 1200}
            style={[styles.memo1, {backgroundColor: props.backgroundColor}]}
        >
            <View style={styles.insideOne}>
                <Text style={{ fontSize: 20, color: '#fff', width: 100 }}>
                    {props.title}
                </Text>
                <Text style={{ color: '#fff', fontSize: 14, marginVertical: 5 }}>
                    {props.month}
                </Text>
            </View>
            <View style={styles.insideTwo}>
                <ImageBackground
                    source={props.background}
                    style={{ width: '100%', height: '100%' }}
                >

                </ImageBackground>
            </View>
            <TouchableOpacity style={styles.insideThree}>
                <Image source={require('../assets/i_icon.png')} />
            </TouchableOpacity>
        </Animatable.View>
    );
};

export default Scroll;

const styles = StyleSheet.create({
    memo1: {
        flex: 1,
        margin: 10,
        borderRadius: 18,
    },
    insideOne: {
        flex: 1,
        padding: 10,
    },
    insideTwo: {
        flex: 2,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    insideThree: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        margin: 10
    }
});