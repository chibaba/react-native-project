import React, { Component } from "react";
import {  StyleSheet, View, } from "react-native";
import { connect } from 'react-redux';

import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
   import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";
   import { addplace, deselectPlace, deletePlace, selectPlace } from './src/store/actions/index';
//import PlaceImage from "./src/assets/preety.png";

 class App extends Component {
    placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
  };

  placeDeletedHandler = () => {
    this.props.onDeletePlace();
  };

  modalClosedHandler = () => {
    this.props.onDeselectPlace();
  };

  placeSelectedHandler = key => {
    this.props.onSelectedPlace(key);
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.props.places}
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
    onDeletePlace: () => dispatch( deletePlace()),
    onSelectedPlace: (key) => dispatch ( selectPlace (key)),
    onDeselectPlace: () => dispatch ( onseleectPlace())
  }
}
export default connect( mapsStateToProps, mapsDispatchToProps)(App)
