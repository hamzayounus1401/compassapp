import React from 'react';
import { View, Text,Button} from 'react-native';


const Confirmation= ({navigation}) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Confirmation</Text>
        <Button title='Edit Pool' onPress={()=>alert('Details')} />
        <Button title='PoolDetails' onPress={()=>navigation.navigate('PoolDetails')} />
        <Button title='Done' onPress={()=>navigation.navigate('PoolCreateJoin')} />

      </View>
    );
  }


export default Confirmation;