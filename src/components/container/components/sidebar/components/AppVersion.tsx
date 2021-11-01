import React from "react";

export const AppVersion = () => {
  if (!process.env.REACT_APP_VERSION) {
    return <span />;
  }

  return (
    <div className="app-version">
      version: <span>{process.env.REACT_APP_VERSION}</span>
    </div>
  );
};

export default AppVersion;
