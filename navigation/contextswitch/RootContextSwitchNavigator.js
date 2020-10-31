import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createDrawerNavigator} from 'react-navigation-drawer';
import AppDrawer from '../drawer/AppDrawer';
import AnonDrawer from '../drawer/AnonDrawer';
import  AsyncStorage  from 'react-native';
import AuthLoadingScreen from '../../screens/AuthLoadingScreen'


const RootContextSwitchNavigator =  createSwitchNavigator({
    AuthLoading:{
        screen: AuthLoadingScreen
    },
   
    RegisterUser:{
        screen: AppDrawer
    },
    AnonUser:{
        screen: AnonDrawer
    },
    
});

export default createAppContainer(RootContextSwitchNavigator);