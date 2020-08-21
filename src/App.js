import React from "react";
import AddToHomeScreen from "@ideasio/add-to-homescreen-react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <AddToHomeScreen
        appId="Add-to-Homescreen React Modified Behavior Example"
        startAutomatically={true}
        startDelay={0}
        lifespan={30}
        skipFirstVisit={true}
        displayPace={0}
        customPromptContent={{
          title:
            "Do you want to install Add-to-homescreen React Modified Behavior Example on your homescreen?",
          cancelMsg: "No",
          installMsg: "Yes, sure!",
          guidanceCancelMsg: "Dismiss",
          src: "images/ExampleLogo.png",
        }}
      /> */}
      <header className="App-header">
        <b>PWA Reactjs</b>
      </header>
    </div>
  );
}

export default App;
