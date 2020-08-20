import React from "react";
import AddToHomeScreen from "@ideasio/add-to-homescreen-react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddToHomeScreen
          appId="Add-to-Homescreen React Modified Styling Example"
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
        <b>PWA Reactjs</b>
      </header>
    </div>
  );
}

export default App;
