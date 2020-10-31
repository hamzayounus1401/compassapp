import React from 'react';
import { View, Text,Button} from 'react-native';


const SelectContributionAmount= ({navigation}) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Select Contribution Amount</Text>
        <Button title='Next' onPress={()=>navigation.navigate('Summary') } />

      </View>
    );
  }


export default SelectContributionAmount;