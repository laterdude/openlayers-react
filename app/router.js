import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import MapLayout from './components/layouts/MapLayout.jsx';

export default (
  <Router history={ hashHistory }>
    <Route path="/" component={ MapLayout } />
  </Router>
);

