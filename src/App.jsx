import React from "react";
import ProfileCard from "./ProfileCard";

function App() {
  return (
    <div>
      <header>
        <h1>Personal Digital Assistants</h1>
      </header>
      <div className="profilecard">
        <ProfileCard />
      </div>
      <div className="profilecard">
        <ProfileCard />
      </div>
      <div className="profilecard">
        <ProfileCard />
      </div>
    </div>
  );
}

export default App;
