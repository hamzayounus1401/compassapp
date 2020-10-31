import image from '../../assets/images/image.jpg'
import AsyncStorage from '@react-native-community/async-storage';
import {SIGN_IN, SIGN_UP, SIGN_OUT} from '../actions/actionTypes'




const initialState = {
    userToken: AsyncStorage.getItem('userToken'),
    isSignedIn: userToken ? true: null,
}

const authReducer =(state, action) => {
    switch(action){
        case action.SIGN_IN:
            return{
                ...state,
                userToken: action.userToken,
                
                
            }
    }
}