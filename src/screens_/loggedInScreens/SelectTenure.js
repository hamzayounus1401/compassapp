import React from 'react';
import { View, Text,Button} from 'react-native';


const SelectTenure= ({navigation}) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Select Tenure</Text>
        <Button title='Next' onPress={()=> navigation.navigate('PoolSummary')} />

      </View>
    );
  }


export default SelectTenure;