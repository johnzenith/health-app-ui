import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ImageSourcePropType
} from 'react-native';

const Support = (props: {
    title:    string,
    image:    ImageSourcePropType,
    subtitle: string
}) => {
    return (
        <View style={{ flex: 1, flexDirection: 'row', }}>
            <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={props.image} />
            </View>
            <View style={{ flex:5, margin:15 }}>
                <Text style={{ fontSize:20, fontWeight:'bold', letterSpacing:-0.5, color:'#2d2d2d' }}>
                    {props.title}
                </Text>
                <Text style={{ fontSize:15, color:'#bec4c9' }}>
                    {props.subtitle}
                </Text>
            </View>
            <View style={{ flex:1, alignItems:'center', justifyContent:'center' }}>
                <TouchableOpacity>
                    <Image source={require('../assets/rightbutton.png')} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Support;