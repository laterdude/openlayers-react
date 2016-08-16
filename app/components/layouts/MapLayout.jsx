import React from 'react';
import MapContainer from '../containers/MapContainer.jsx';

export default class MapLayout extends React.Component {
  render() {
    return (
      <div className="app">
        <MapContainer />
      </div>
    );
  }
}
