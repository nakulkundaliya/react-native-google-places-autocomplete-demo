/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import GooglePlaceAutocomplete from './Components/GooglePlacesAutocomplete';
import styles from './AppStyle';
console.disableYellowBox = true;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 42.882004,
      longitude: 74.582748,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
  }

  updateLocationMarker = details => {
    this.setState({
      latitude: details.geometry.location.lat,
      longitude: details.geometry.location.lng,
    });
  };

  renderPlaceSearch() {
    return (
      <View style={styles.placesViewStyle}>
        <GooglePlaceAutocomplete
          onPress={details => this.updateLocationMarker(details)}
        />
      </View>
    );
  }

  renderMap() {
    const {latitude, longitude} = this.state;
    return (
      <View style={styles.mapViewStyle}>
        <MapView
          style={styles.mapStyle}
          region={this.state}
          showsUserLocation={true}>
          <Marker
            coordinate={{
              latitude,
              longitude,
            }}
            title={'Test'}
          />
        </MapView>
      </View>
    );
  }

  render() {
    return (
      <>
        {this.renderMap()}
        {this.renderPlaceSearch()}
      </>
    );
  }
}
export default App;
