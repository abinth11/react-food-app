import React from "react";

const YouAreOffline = () => {
  return (
    <div className="YouAreOfflineContainer">
      <div className="Overlay"></div>
      <div className="Content">
        <h4 className="Title">You are offline.</h4>
        <p className="Description">Please check your internet connection...</p>
        <div className="Animation"></div>
      </div>
    </div>
  );
};

export default YouAreOffline;
