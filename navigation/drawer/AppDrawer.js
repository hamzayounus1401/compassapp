import { createDrawerNavigator} from 'react-navigation-drawer';
import ProfileScreen from '../../screens/ProfileScreen';
import HomeScreen from '../../screens/HomeScreen';


const AppDrawer =  createDrawerNavigator({
    Home:{
        screen: ProfileScreen
    },
    Profile:{
        screen: HomeScreen
    }
    
    
});

export default AppDrawer;