import React from 'react';
import { View, Text, Button} from 'react-native';


const MyPools= ({navigation}) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Active Pools</Text>
        <Text>InActive Pools</Text>
        <Button title='InActive Pool One' onPress={()=> navigation.navigate('ActivatePool')} />

      </View>
    );
  }


export default MyPools;