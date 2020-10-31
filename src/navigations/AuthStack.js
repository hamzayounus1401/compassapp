import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import SignUp from '../screens_/authScreens/SignUp';
import AuthStarter from '../screens_/authScreens/AuthStarter';
import SignIn from '../screens_/authScreens/SignIn'
import PhoneVerification from '../screens_/authScreens/PhoneVerification';
import SmsCode from '../screens_/authScreens/SmsCode';


const Stack = createStackNavigator();

const AuthStack = () =>
(
  <Stack.Navigator>
    <Stack.Screen name="AuthStarter" component={AuthStarter}/>
    <Stack.Screen name="SignUp" component={SignUp}/>
    <Stack.Screen name="SmsCode" component={SmsCode} />
    <Stack.Screen name="SignIn" component={SignIn}/>
    <Stack.Screen name="PhoneVerification" component={PhoneVerification}/>
  </Stack.Navigator>
)

export default AuthStack;