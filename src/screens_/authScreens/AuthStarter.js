import React from 'react';
import {Button, View, StyleSheet, Text} from 'react-native';



const AuthStarter = ({navigation}) => {
    return(
        <View style={styles.constainer}>
            <View style={styles.header}>
                <Text>Hello Hamza</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <View style={{width:'40%'}}>
                    <Button title="Login" onPress={()=> navigation.navigate('SignIn')}/>
                </View>
                <View style={{width:'40%'}}>
                    <Button title="Sign Up" onPress={() => navigation.navigate('PhoneVerification')}/>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    constainer:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'flex-end'
    },
    header:{
        flex:1,
        marginTop:'20%',
        flexDirection:'column',
        justifyContent:'flex-start',
      
    },
    buttonsContainer:{
      flex:1,
      width:'100%',
      justifyContent:'space-around',
      flexDirection:'row',
      alignItems:'flex-end' ,  
      marginBottom:'20%',
      padding:10  
    },
  
 
});


export default AuthStarter;