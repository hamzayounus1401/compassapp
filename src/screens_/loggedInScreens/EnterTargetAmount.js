import React from 'react';
import { View, Text,Button} from 'react-native';


const EnterTargetAmount= ({navigation}) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Enter target Amount</Text>
        <Button title='Next' onPress={()=>navigation.navigate('SelectTenure') } />

      </View>
    );
  }


export default EnterTargetAmount;