import React from 'react';
import { View, Text,Button} from 'react-native';


const AddPeople2= ({navigation}) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Add People Email/ Phone</Text>
        <Button title='Next' onPress={()=> navigation.navigate('SendInvites')} />

      </View>
    );
  }


export default AddPeople2;