import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    ImageSourcePropType
} from 'react-native';
import * as Animatable from 'react-native-animatable';

type CardTitle        = JSX.Element | String;
type CallbackFunction = () => void;

const Card = (
    props: {
        image:              ImageSourcePropType, 
        title:              CardTitle,
        subtitle:           CardTitle, 
        animation?:         string, 
        completed?:         String,
        handleScreenChange: CallbackFunction,
    }
) => {

    return (
        <Animatable.View 
            animation={props.animation || 'bounceInLeft'}
            duration={1500}
            style={styles.cardOne}
        >
            <TouchableOpacity style={styles.box1} onPress={props.handleScreenChange}>
                <View style={styles.cardView}>
                    <Image source={props.image} />
                </View>
            </TouchableOpacity>
            <View style={styles.box2}>
                <Text style={{ fontSize: 20, color: '#2d2d2d', letterSpacing: -0.5 }}>
                    {props.title}
                </Text>
                <Text style={{ fontSize: 15, color: '#bec4c9', letterSpacing: -0.5, paddingVertical: 5 }}>
                    {props?.subtitle || ''}
                </Text>
            </View>
            <View style={styles.box3}>
                <View style={styles.boxThreeView}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: '#136df3'}}>
                        {props.completed}
                    </Text>
                </View>
            </View>
        </Animatable.View>
    );
};

export default Card;

const styles = StyleSheet.create({
    cardOne: {
        flex: 1,
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    cardTwo: {
        flex: 1,
    },
    box1: {
        flex: 1,
    },
    box2: {
        flex: 1,
    },
    box3: {
        flex: 1,
    },
    cardView: {
        borderRadius: 21,
        backgroundColor: 'rgba(255,19,134, 0.2)',
        height: '100%',
        width: '90%',
        flex: 0.9,
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxThreeView: {
        height: 100, 
        width: '80%', 
        borderWidth: 1, 
        borderColor: '#136df3', 
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 0,
    }
});