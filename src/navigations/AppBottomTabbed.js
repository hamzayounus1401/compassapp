import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import PoolStack from './PoolStack.';
import SettingStack from './SettingStack';
import ProfileStack from './ProfileStack';



const AppTabbed = createBottomTabNavigator();
const AppBottomTabbe = () => (
  <AppTabbed.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Home') {
        iconName = focused
          ? 'home-outline'
          : 'home-outline';
      } else if (route.name === 'Setting') {
        iconName = focused ? 'settings-outline' : 'settings-outline';
      
      }else if (route.name === 'Profile') {
        iconName = focused ? 'person-outline' : 'person-outline';
      }
      else if (route.name === 'Pool') {
        iconName = focused ? 'pie-chart-outline' : 'pie-chart-outline';
      }
      
     // You can return any component that you like here!
      return <Ionicons name={iconName} size={size} color={color} />;
    },
  })}
  tabBarOptions={{
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  }}>
    <AppTabbed.Screen name="Home" component={HomeStack} />
    <AppTabbed.Screen name="Pool" component={PoolStack}/>
    <AppTabbed.Screen name="Setting" component={SettingStack}/>
    <AppTabbed.Screen name="Profile" component={ProfileStack}/>  
  </AppTabbed.Navigator>
)

export default AppBottomTabbe;