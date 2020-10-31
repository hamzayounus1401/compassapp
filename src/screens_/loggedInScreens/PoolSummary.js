import React from 'react';
import { View, Text,Button} from 'react-native';


const PoolSummary= ({navigation}) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Pool Summary</Text>
        <Button title='Next' onPress={()=> navigation.navigate('AddPeople1')} />

      </View>
    );
  }


export default PoolSummary;