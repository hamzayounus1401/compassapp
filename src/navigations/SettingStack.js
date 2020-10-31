import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Setting from '../screens_/loggedInScreens/Setting';

const Stack = createStackNavigator();

const SettingStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="Pool" component={Setting}/>
    </Stack.Navigator>
)

export default SettingStack;