import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../screens_/loggedInScreens/Profile';

const Stack = createStackNavigator();

const ProfileStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="Pool" component={Profile}/>
    </Stack.Navigator>
)

export default ProfileStack;