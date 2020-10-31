import React from 'react';
import { View, Text,Button} from 'react-native';


const PoolDetails= ({navigation}) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Pool Details</Text>
        <Button title='Done' onPress={()=>navigation.navigate('PoolCreateJoin') } />

      </View>
    );
  }


export default PoolDetails;