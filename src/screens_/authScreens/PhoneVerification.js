import React from 'react';
import { View, Button} from 'react-native';



const PhoneVerification = ({navigation}) => {
     return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title="Enter Phone Number" onPress={() => navigation.navigate('SmsCode')}/>
                </View>
     )
}


export default PhoneVerification;