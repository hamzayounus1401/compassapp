import React from 'react';
import {Modal, View, Button, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const PlaceDetail = (props) => {
    let modalContent = null
    if(props.selectedPlace){
        modalContent = (
            <View>
                <Image 
                    source={props.selectedPlace.image } 
                    style={{height:100, width:'100%'}}/>
                <Text >{props.selectedPlace.value}</Text>
            </View>
        )
    }

    return(
    <Modal
        onRequestClose={props.onModalClosed}
        visible={props.selectedPlace!==null}
        animationType='fade'> 
        <View style={styles.modalContainer}>
            <View>
                {modalContent}
            </View >
            <View >
                <TouchableOpacity onPress={props.onPlaceDeleted}>
            <Icon
                size={30}
                name="ios-trash"
                color="red"
                
             />
             </TouchableOpacity>
            <Button 
                title="Close" 
                onPress={props.onModalClosed} />           
            </View>
        </View>
    </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer:{
        justifyContent:'space-between',
        margin:10,
        padding:5
    },
})


export default PlaceDetail;