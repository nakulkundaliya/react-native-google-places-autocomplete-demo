import React from 'react';
// import PropTypes from 'prop-types';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const Box = props => {
  const {onPress} = props;
  return (
    <GooglePlacesAutocomplete
      placeholder="Search"
      minLength={2}
      autoFocus={false}
      returnKeyType={'search'}
      keyboardAppearance={'light'}
      listViewDisplayed={false}
      fetchDetails={true}
      renderDescription={row => row.description}
      onPress={(data, details) => onPress(details)}
      query={{
        key: 'AIzaSyCafGFc2fN7IuDJO9H2yCgDIwFu3t4WIyg',
        language: 'en',
        types: '(regions)',
      }}
      styles={{
        textInputContainer: {
          width: '100%',
        },
        description: {
          fontWeight: 'bold',
        },
        predefinedPlacesDescription: {
          color: '#1faadb',
        },
      }}
      nearbyPlacesAPI="GooglePlacesSearch"
      GooglePlacesSearchQuery={{
        rankby: 'distance',
        type: 'food',
      }}
      filterReverseGeocodingByTypes={[
        'locality',
        'administrative_area_level_1',
      ]}
      debounce={200}
    />
  );
};

export default Box;
