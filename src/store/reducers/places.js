import {ADD_PLACE,DELETE_PLACE, DESELECT_PLACE, SELECT_PLACE} from '../actions/actionTypes'
import image from '../../assets/images/image.jpg'


const initialState = {
    places: [],
    selectedPlace: null,
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_PLACE:
            return{
                ...state,
                places: state.places.concat({
                    key: Math.random().toString(),
                    name: action.placeName,
                    image: image,                    
                })
            };
        case DELETE_PLACE:
            return{
                ...state,
                places: state.places.filter(place => {
                    return place.key !== state.selectedPlace.key;
                }),
                selectedPlace: null,
            };
        case SELECT_PLACE:
            return{
                ...state,
                selectedPlace: state.places.find(place => {
                    return action.placeKey === place.key;
                }),
            };
        case DESELECT_PLACE:
            return{
                ...state,
                selectedPlace:null,
            }

        default:
            return state;
    }
};

export default reducer;