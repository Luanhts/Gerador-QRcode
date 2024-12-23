import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <h1>Gerador de Qr Code</h1>
        <div className="img-box">
          <img src="https://github.com/Luanhts.png" alt="" />
        </div>
        <input type="url" placeholder="Digite a URL" />
        <button type="submit">Gerar Qr Code</button>
      </div>
    </>
  );
}

export default App;
