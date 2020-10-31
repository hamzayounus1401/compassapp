import React from 'react';
import { View, Text,Button} from 'react-native';


const InputPoolName= ({navigation}) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Enter Pool Name</Text>
        <Button title='Next' onPress={()=> navigation.navigate('EnterTargetAmount')} />

      </View>
    );
  }


export default InputPoolName;