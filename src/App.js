import React from "react";
import {
  WorkBoxProvider,
  UpdateActivatedReload,
  UpdateActivated,
  WorkBoxProvider,
} from "react-workbox";

import "./App.css";

function App() {
  constructTime = new Date();
  return (
    <WorkBoxProvider interval={30 * 1000}>
      <div className="App">
        <header className="App-header">
          <b>PWA Reactjs</b>
          <p>Constructed on {constructTime.toLocaleString()}.</p>
          <UpdateAvailable>
            Update Available - You need to close all tabs on reopen your browser
            to be able to use new version.
          </UpdateAvailable>
          <UpdateActivated>
            Update Activated - You can see this message because dev tools is
            used to activate the new version by using skip waiting
          </UpdateActivated>
        </header>
      </div>
    </WorkBoxProvider>
  );
}

export default App;
