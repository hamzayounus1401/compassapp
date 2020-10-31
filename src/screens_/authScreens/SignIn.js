import React from 'react';
import {Button, Text, View} from 'react-native';
import AuthContext from '../../context'

const SignIn = ({navigation}) => {
    const {signIn} = React.useContext(AuthContext); 
    return(
        <View style={{flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <Text>Sign In</Text>
            <Button title="Login" onPress={()=> {signIn()}}></Button>
            
        </View>    
        )
}


export default SignIn;