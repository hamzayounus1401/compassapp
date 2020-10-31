import React from 'react'
import {View, TextInput, StyleSheet, Button} from 'react-native';


class PlaceInput extends React.Component{
    state = {
        placeName: '', 
    }

    placeNameChangeHandler = (value)=>{
        this.setState({
          placeName: value
        })
      }

    placeButton = () => {
        if(this.state.placeName.trim() === ''){
          return;
        }
        this.props.onPlaceAdded(this.state.placeName)
    
    }
        

    render(){
        return(
            <View style={styles.inputContainer}> 
                <TextInput 
                style={styles.placeInput} 
                value={this.state.placeName} 
                onChangeText={this.placeNameChangeHandler}
                placeholder = "Search Place" />
                <Button 
                title="Add" 
                style={styles.placeButton}
                onPress={()=> this.placeButton()}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputContainer:{
        //flex:1,
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        alignItems:'center'
      },
})

export default PlaceInput;