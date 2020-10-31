import React from 'react';
import { View,Text, Button} from 'react-native';



const SmsCode = ({navigation}) => {
     return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

<Button title="Enter Code" onPress={() => navigation.navigate('SignUp')}/>
            </View>
     )
}


export default SmsCode;