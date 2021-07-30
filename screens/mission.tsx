import React from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    StatusBar,
    SafeAreaView
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import Scroll  from './scroll';
import Support from './support';

const Mission = () => {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.container}>
                <ScrollView 
                    style={{ flex: 1 }}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.scrollView}
                >
                    <View style={styles.header}>
                        <Text style={styles.inline}>My Mission</Text>
                    </View>
                    <View style={styles.memos}>
                        <ScrollView 
                            horizontal={true}
                            contentContainerStyle={{ width: '200%' }}
                            showsHorizontalScrollIndicator={false}
                        >
                            <Scroll 
                                title='Game Of Chess'
                                month='Sep - Nov'
                                animation='bounceInLeft'
                                backgroundColor='#ffb336' 
                                background={require('../assets/graphtwo.png')}
                            />
                            <Scroll 
                                title='100 km jogging'
                                month='Jan - Feb'
                                animation='bounceInLeft'
                                backgroundColor='#7dc9e7' 
                                background={require('../assets/graphtwo.png')}
                            />
                            <Scroll 
                                title='Netflix and Chill'
                                month='Sep - Nov'
                                animation='bounceInLeft'
                                backgroundColor='#ffbe86' 
                                background={require('../assets/graphtwo.png')}
                            />
                            <Scroll 
                                title='Video Games'
                                month='Sep - Nov'
                                animation='bounceInLeft'
                                backgroundColor='#ffbe86' 
                                background={require('../assets/graphtwo.png')}
                            />
                        </ScrollView>
                    </View>
                    <View style={styles.supportView}>
                        <Text style={styles.support}>Support</Text>
                    </View>
                    <Animatable.View
                        animation="fadeInLeft"
                        duration={1500}
                        style={styles.rectangleOne}
                    >
                        <Support
                            image={require('../assets/exercise.png')}
                            title="Daily Exercise"
                            subtitle="Difficulty on insensible"
                        />
                    </Animatable.View>
                    <Animatable.View
                        animation="fadeInRight"
                        duration={1500}
                        style={[styles.rectangleOne, styles.rectangleTwo]}
                    >
                        <Support
                            image={require('../assets/apple.png')}
                            title="Balanced Diet"
                            subtitle="Occasional Preference Fast"
                        />
                    </Animatable.View>
                    <Animatable.View
                        animation="fadeInLeft"
                        duration={1500}
                        style={[styles.rectangleOne, styles.rectangleThree]}
                    >
                        <Support
                            image={require('../assets/cricket.png')}
                            title="Sports and Yoga"
                            subtitle="Services securing health ..."
                        />
                    </Animatable.View>
                    <Animatable.View
                        animation="fadeInLeft"
                        duration={1500}
                        style={[styles.rectangleOne, styles.rectangleFour]}
                    >
                        <Support
                            image={require('../assets/cricket.png')}
                            title="Sports and Yoga"
                            subtitle="Services securing health ..."
                        />
                    </Animatable.View>
                    <Animatable.View
                        animation="fadeInLeft"
                        duration={1500}
                        style={[styles.rectangleOne, styles.rectangleFive]}
                    >
                        <Support
                            image={require('../assets/cricket.png')}
                            title="Sports and Yoga"
                            subtitle="Services securing health ..."
                        />
                    </Animatable.View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default Mission;

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollView: {
        width: '100%',
        height: '120%',
    },
    header: {
        flex: 1,
        left: 25,
        top: 100,
    },
    inline: {
        fontSize: 38,
        letterSpacing: -0.5,
        fontWeight: 'bold',
        color: '#2e2e2e', 
    },
    memos: {
        height: 250,
        position: 'absolute',
        top: 160,
        width: '100%',
        marginLeft: 10
    },
    supportView: {
        position: 'absolute',
        left: 25,
        top: 420,
    },
    support: {
        fontSize: 25,
        fontWeight: 'bold',
        letterSpacing: -0.5,
        color: '#2e2e2e',
    },
    rectangleOne: {
        height: 85,
        width: '85%',        
        position: 'absolute',
        alignSelf: 'center',
        top: 470,
        borderRadius: 18,
        shadowOffset: {width: 100, height: 100},
        shadowColor: 'rgba(138,149,158,0.2)',
        shadowOpacity: 1,
        elevation: 30,
        backgroundColor: '#fff'
    },
    rectangleTwo: {
        top: 580,
        backgroundColor: '#f4f9fc',
    },
    rectangleThree: {
        top: 680,
        backgroundColor: '#f4f9fc',
    },
    rectangleFour: {
        top: 780,
        backgroundColor: '#f4f9fc',
    },
    rectangleFive: {
        top: 880,
        backgroundColor: '#f4f9fc',
    },
});