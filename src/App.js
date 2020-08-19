import React from 'react';
import './component/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import NavbarWeb from './component/NavbarWeb'
import NowWatchingContainer from './component/NowWatchingContainer.js'
import WaitingListContainer from './component/WaitingListContainer.js'
import FinishedContainer from './component/FinishedContainer.js'

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
