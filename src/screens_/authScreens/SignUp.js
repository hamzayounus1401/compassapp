import React from 'react';
import { View, Text, Button} from 'react-native';
import AuthContext from '../../context'


const SignUp = ({navigation}) => {
    const {signUp} = React.useContext(AuthContext)
     return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <Text>Details will be Added here</Text>
         <Button title='signup' onPress={()=> signUp()} />
        </View>
     )
}


export default SignUp;