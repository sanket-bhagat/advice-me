import React, { useState } from "react";
import https from "https";

function App() {
  const [advice, setAdvice] = useState("⬇");

  function getAdvice() {
    const url = "https://api.adviceslip.com/advice";
    https.get(url, function (response) {
      response.on("data", function (data) {
        // console.log(JSON.parse(data).slip.advice);
        setAdvice(JSON.parse(data).slip.advice);
      });
    });
  }

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="btn btn-outline-secondary" onClick={getAdvice}>
          <span>Give Me Advice!</span>
        </button>
      </div>
    </div>
  );
}

export default App;
