import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens_/loggedInScreens/Home';
import PoolCreateJoin from '../screens_/loggedInScreens/PoolCreateJoin';
import InputPoolName from '../screens_/loggedInScreens/InputPoolName'
import EnterTargetAmount from '../screens_/loggedInScreens/EnterTargetAmount';
import SelectTenure from '../screens_/loggedInScreens/SelectTenure';
import PoolSummary from '../screens_/loggedInScreens/PoolSummary';
import AddPeople1 from '../screens_/loggedInScreens/AddPeople1';
import AddPeople2 from '../screens_/loggedInScreens/AddPeople2';
import SendInvites from '../screens_/loggedInScreens/SendInvites';
import Confirmation from '../screens_/loggedInScreens/Confirmation';
import OnGoingPools from '../screens_/loggedInScreens/OnGoingPools';
import SelectContributionAmount from '../screens_/loggedInScreens/SelectContributionAmount';
import Summary from '../screens_/loggedInScreens/Summary';
import PoolDetails from '../screens_/loggedInScreens/PoolDetails';

const Stack = createStackNavigator();

const HomeStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="PoolCreateJoin" component={PoolCreateJoin}/>
        <Stack.Screen name="InputPoolName" component={InputPoolName}/>
        <Stack.Screen name="EnterTargetAmount" component={EnterTargetAmount}/>
        <Stack.Screen name="SelectTenure" component={SelectTenure}/>
        <Stack.Screen name="PoolSummary" component={PoolSummary}/>
        <Stack.Screen name="Summary" component={Summary}/>
        <Stack.Screen name="AddPeople1" component={AddPeople1}/>
        <Stack.Screen name="AddPeople2" component={AddPeople2}/>
        <Stack.Screen name="SendInvites" component={SendInvites}/>
        <Stack.Screen name="Confirmation" component={Confirmation}/>
        <Stack.Screen name="OnGoingPools" component={OnGoingPools}/>
        <Stack.Screen name="SelectContributionAmount" component={SelectContributionAmount}/>
        <Stack.Screen name="PoolDetails" component={PoolDetails}/>
    </Stack.Navigator>
)
export default HomeStack;