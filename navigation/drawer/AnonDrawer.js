import { createDrawerNavigator} from 'react-navigation-drawer';
import LoginScreen from '../../screens/LoginScreen';
import HomeScreen from '../../screens/HomeScreen';


const AnonDrawer =  createDrawerNavigator({
    Home:{
        screen: HomeScreen
    },
    Profile:{
        screen: LoginScreen
    },
    
});

export default AnonDrawer;