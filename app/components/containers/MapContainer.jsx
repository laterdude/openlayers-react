import React from 'react';
import PlaceLayer from '../../layers/place-layer';
import Map from '../presentational/Map.jsx';

export default class MapContainer extends React.Component {
  render() {
    return (
      <div>
        <Map layer={ PlaceLayer } />
      </div>
    );
  }
}
