import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthContext from './src/context';
import Loading from './src/screens_/authScreens/Loading';
import AuthStack from './src/navigations/AuthStack';
import AppBottomTabbed from './src/navigations/AppBottomTabbed' ;




const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setToken] = React.useState(null); 

  const authContext = {
    signIn: ()=>{
      setIsLoading(false),
      setToken('abc')
    },
    signOut: ()=>{
      setIsLoading(true),
      setToken(null),
      setTimeout(()=>{
        setIsLoading(false);
      }, 1000)
    },
    
    signUp: ()=>{
      setIsLoading(false),
      setToken('abc')
      
    }
  }

  React.useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    }, 1000);
  }, [])
  
  return(
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {
          isLoading ?
          (
            <Loading />
          ): userToken ? (
            <AppBottomTabbed />
          ):(
          <AuthStack  />
          )}
      </NavigationContainer>
      </AuthContext.Provider>
  )
  }
export default App;