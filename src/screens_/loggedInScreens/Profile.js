import React from 'react';
import { View, Text, Button} from 'react-native';
import AuthContext from '../../context'

const Profile= () => {
    const {signOut} =  React.useContext(AuthContext);
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile</Text>
        <Button title='Logout' onPress={()=> signOut()} />

      </View>
    );
  }


export default Profile;