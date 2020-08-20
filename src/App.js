import React from "react";
import AddToHomeScreen from "@ideasio/add-to-homescreen-react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AddToHomeScreen
        appId="Add-to-Homescreen React Live Demo"
        startAutomatically={true}
        startDelay={0}
        lifespan={30}
        skipFirstVisit={true}
        displayPace={0}
        customPromptContent={{
          cancelMsg: "",
          installMsg: "Install",
          guidanceCancelMsg: "",
        }}
        customPromptElements={{
          container: "athContainer",
          containerAddOns: "",
          banner: "athBanner",
          logoCell: "athLogoCell",
          logoCellAddOns: "athContentCell",
          logo: "athLogo",
          titleCell: "athTitleCell",
          titleCellAddOns: "athContentCell",
          title: "athTitle",
          cancelButtonCell: "athCancelButtonCell",
          cancelButtonCellAddOns: "athButtonCell",
          cancelButton: "athCancelButton",
          installButtonCell: "athInstallButtonCell",
          installButtonCellAddOns: "athButtonCell",
          installButton: "athInstallButton",
          installButtonAddOns: "button",
          guidance: "athGuidance",
          guidanceImageCell: "athGuidanceImageCell",
          guidanceImageCellAddOns: "",
          guidanceCancelButton: "athGuidanceCancelButton",
        }}
      />
      <header className="App-header">
        <b>PWA Reactjs</b>
      </header>
    </div>
  );
}

export default App;
