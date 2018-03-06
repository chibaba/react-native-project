import React, { Component } from "react";
import {  StyleSheet, View, } from "react-native";
import { connect } from 'react-redux';

import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
   import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";
   import { addplace, deselectPlace, deletePlace, selectPlace } from './src/store/actions/index';
//import PlaceImage from "./src/assets/preety.png";

 class App extends Component {
  state = {
    places: [],
    selectedPlace: null
  };

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          name: placeName,
          image: {
            uri: "https://www.pexels.com/search/nature/"
          }
        })
      };
    });
  };

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevSate.selectedPlace.key;
        }),
        selectedPlace: null
      };
    });
  };

  modalClosedHandler = () => {
    this.setStae({
      selectedPlace: null
    });
  };

  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.state.places}
          onItemSelected={this.placeSelectedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});

const mapStateToProps = state => {
  return {
    places:state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapsDispatchToProps = dispatch => {
  return {
    onAddPlace: () => dispatch ( addPlace(name)),
    ondeletePlace: () => dispatch( deletePlace()),
    onselectedPlace: (key) => dispatch ( selectPlace (key)),
    ondeselectPlace: () => dispatch ( onseleectPlace())
  }
}
export default connect( mapsStateToProps, mapsDispatchToProps)(App)
