import React from 'react';
import { View, Text,Button} from 'react-native';


const AddPeople1= ({navigation}) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Favourite Contacts/ Add People</Text>
        <Button title='Next' onPress={()=> navigation.navigate('AddPeople2')} />
        

      </View>
    );
  }


export default AddPeople1;