import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyPools from '../screens_/loggedInScreens/MyPools';
import ActivatePool from '../screens_/loggedInScreens/ActivatePool';
import MyPoolSummary from '../screens_/loggedInScreens/MyPoolSummary';

const Stack = createStackNavigator();

const PoolStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="MyPools" component={MyPools}/>
        <Stack.Screen name="ActivatePool" component={ActivatePool}/>
        <Stack.Screen name="MyPoolSummary" component={MyPoolSummary}/>
       
    </Stack.Navigator>
)

export default PoolStack;