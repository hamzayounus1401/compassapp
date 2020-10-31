import React from 'react';
import { View, Text,Button} from 'react-native';


const ActivatePool= ({navigation}) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Select date</Text>
        <Button title='Next' onPress={()=> navigation.navigate('MyPoolSummary')} />
        

      </View>
    );
  }


export default ActivatePool;