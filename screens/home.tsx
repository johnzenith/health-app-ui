import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground
} from 'react-native';

import Day from './day';
import Card from './card';

const Home = (props: {navigation: any}) => {
    const [state, setState] = React.useState({
        color: '#136df3',
        activeBackgroundColor: 'rgba(255,255,255,0.291821)',
    });

    const daysList = [
        {label: 'Sun'},
        {label: 'Mon'},
        {label: 'Tue'},
        {label: 'Wed'},
        {label: 'Thu', active: true},
        {label: 'Fri'},
        {label: 'Sat'},
    ];

    const handleScreenChange = () => {
        return props.navigation.navigate('Mission');
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerOne}>
                <View style={styles.boxOne}>
                    
                </View>
                <View style={styles.boxTwo}>
                    <Text style={styles.name}>Hi, John</Text>
                    <Text style={styles.subtitle}>Here is your health</Text>
                </View>
                <View style={styles.boxThree}>
                    <ImageBackground
                        source={require('../assets/graphone.png')}
                        style={{ width: '100%', height: '100%' }}
                    />
                </View>
                <View style={styles.boxFour}>
                    {daysList.map(day => (
                        <Day 
                            key={day.label} 
                            dayname={day.label} 
                            active={day?.active ? state.activeBackgroundColor : ''}
                        />
                    ))}
                </View>
            </View>
            <View style={styles.containerTwo}>
                <View style={styles.line}></View>
                <View style={styles.progress}>
                    <Text style={styles.textOne}>My Progress</Text>
                </View>
                <View style={styles.cards}>
                    <Card
                        animation='bounceInLeft'
                        image={require('../assets/checkbox.png')}
                        title='Mission'
                        subtitle='85% Completed'
                        completed='85%'
                        handleScreenChange={handleScreenChange}
                    />

                    <Card
                        animation='bounceInRight'
                        image={require('../assets/checktodo.png')}
                        title='React Native'
                        subtitle='55% Completed'
                        completed='55%'
                        handleScreenChange={handleScreenChange}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#136df3'
    },
    containerOne: {
        flex: 1.5,
    },
    containerTwo: {
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderTopRightRadius: 60,
        borderTopLeftRadius: 60,
    },
    boxOne: {
        flex: 1,
    },
    boxTwo: {
        flex: 1,
        marginHorizontal: 35,
    },
    boxThree: {
        flex: 2.5,
    },
    boxFour: {
        flex: 0.5,
        color: '#fff',
        flexDirection: 'row',
    },
    name: {
        fontSize: 35,
        color: '#fff',
        fontWeight: 'bold',
        letterSpacing: -0.5,
    },
    subtitle: {
        fontSize: 20,
        color: '#fff',
    },
    line: {
        width: 66,
        height: 4,
        backgroundColor: '#f4f0f0',
        borderRadius: 2,
        marginVertical: 25,
        marginLeft: 'auto',
        marginRight: 'auto',
        // left: 150,
    },
    progress: {
        left: 50,
    },
    textOne: {
        fontSize: 20,
        color: '#2d2d2d',
        letterSpacing: -0.5,
    },
    cards: {
        flex: 1,
        marginTop: 10,
        marginHorizontal: 30,
    }
});

export default Home;