
import { ADD_PLACE, DESELECT_PLACE, SELECT_PLACE, DESELECT_PLACE } from  '../actions/actionTypes';

const initialState =  {
  places: [],
  selectedPlace: null

}

const reducer = (state = initialState, actions) => {
    switch (action.type) {
      case ADD_PLACE: 
      return {
        ...state,
        places: prevState.places.concat({
          key: Math.random(),
          name: action.placeName,
          image: {
            uri: "https://www.pexels.com/search/nature/"
          }
        })
      }
      case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== state.selectedPlace.key;
        }),
        selectedPlace: null
      };
      case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(place => {
          return place.key === action.placekey;
        }),
      };
      case DESELECT_PLACE:
      return {
        ...state,
        
        selectedPlace: null
              }

      default: 
      return state;
    }
}

export default reducer;