import React from 'react';
import { View, Text,Button} from 'react-native';


const PoolCreateJoin= ({navigation}) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        
        <Button title='Create' onPress={()=> navigation.navigate('InputPoolName')} />
        <Button title='Join' onPress={()=> navigation.navigate('OnGoingPools')} />

      </View>
    );
  }


export default PoolCreateJoin;