import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';



const Listitem = (props) =>{
    return(
        <TouchableOpacity onPress={props.onItemPressed}>
            <View style={styles.listItem}> 
                <Image source={props.placeImage} style={{width:40, height:40, margin:5, marginRight:20} }/>
                <Text style={{color:'white'}}>{props.placeName}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    listItem:{
        backgroundColor:'#1f456e',
        width:'100%',
        margin:5,
        padding:5,
        flexDirection:'row',
        alignItems:'center',
        }
});



export default Listitem;