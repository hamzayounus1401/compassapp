import React from 'react';
import { View, Text,Button} from 'react-native';


const Summary= ({navigation}) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Pool Summary</Text>
        <Button title='Contribute More' onPress={()=> navigation.navigate('SelectContributionAmount')} />
        <Button title='Pool Details' onPress={()=> navigation.navigate('PoolDetails')} />

        <Button title='Done' onPress={()=> navigation.navigate('PoolCreateJoin')} />

      </View>
    );
  }


export default Summary;