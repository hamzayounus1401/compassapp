import React from 'react';
import { View, Text,Button} from 'react-native';


const SendInvites= ({navigation}) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Send Invites</Text>
        <Button title='Send' onPress={()=>alert("Sended") } />

        <Button title='Next' onPress={()=>navigation.navigate('Confirmation') } />

      </View>
    );
  }


export default SendInvites;