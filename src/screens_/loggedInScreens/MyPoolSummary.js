import React from 'react';
import { View, Text,Button} from 'react-native';


const MyPoolSummary= ({navigation}) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Summary</Text>
        <Button title='Done' onPress={()=> navigation.navigate('MyPools')} />
        

      </View>
    );
  }


export default MyPoolSummary;