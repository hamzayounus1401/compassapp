import React from 'react';
import {View,  FlatList} from 'react-native';
import Listitem from '../components/Listitem';

const PlaceList = (props) =>{
    return(
        <FlatList 
            data={props.places}
            style={{width:'100%'}}
            keyExtractor={item => item.key}
            renderItem={(info)=>(
                <Listitem
                    placeName = {info.item.name}
                    placeImage = {info.item.image}
                    onItemPressed={()=>props.onItemSelected(info.item.key)}
             />
            )}>

            
            
        </FlatList>
    );
}

export default PlaceList;