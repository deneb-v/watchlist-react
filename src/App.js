import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import NavbarWeb from './NavbarWeb.js'
import NowWatchingContainer from './NowWatchingContainer.js'
import WaitingListContainer from './WaitingListContainer.js'
import FinishedContainer from './FinishedContainer.js'

function App() {
  return (
    <div>
      <NavbarWeb />
      <NowWatchingContainer />
      <WaitingListContainer />
      <FinishedContainer />
    </div>
  );
}

export default App;
