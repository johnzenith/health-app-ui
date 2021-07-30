import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';

import Home    from './screens/home';
import Mission from './screens/mission';

const Stack = createStackNavigator();

const App = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Home" 
                    component={Home}
                    options={{
                        title: '',
                        headerTransparent: true,
                        headerLeft: () => (
                            <Image source={require('./assets/drawericon.png')} />
                        ),
                        headerRight: () => (
                            <Image 
                                source={require('./assets/user.png')} 
                                style={{ marginHorizontal: 20, marginTop: 40 }}
                            />
                        )
                    }} 
                />
                <Stack.Screen 
                    name="Mission" 
                    component={Mission}
                    options={{
                        title: '',
                        headerTransparent: true,
                        headerLeft: () => (
                            <Image 
                                source={require('./assets/blackmenu.png')}
                                style={{ marginHorizontal: 20, marginTop: 40 }}
                            />
                        ),                        
                        headerRight: () => (
                            <Image
                                source={require('./assets/user.png')} 
                                style={{ marginHorizontal: 35, marginTop: 45 }}
                            />
                        )
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;