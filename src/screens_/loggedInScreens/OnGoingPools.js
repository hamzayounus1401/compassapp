import React from 'react';
import { View, Text,Button} from 'react-native';


const OnGoingPools= ({navigation}) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>On Going Pools</Text>
        <Button title='Pool 1' onPress={()=> navigation.navigate('SelectContributionAmount')} />
        <Button title='Pool 2' onPress={()=> navigation.navigate('SelectContributionAmount')} />

      </View>
    );
  }


export default OnGoingPools;