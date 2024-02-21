import React, { useState } from "react";

function App() {
  setInterval(unpdateTime, 1000);
  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  function unpdateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={unpdateTime}>Get Time</button>
    </div>
  );
}

export default App;
