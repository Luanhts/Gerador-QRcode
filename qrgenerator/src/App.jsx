import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [url, setUrl] = useState("");
  const [qrcode, setQrCode] = useState("");

  const handleInputChange = (event) => {
    setUrl(event.target.value);
  };

  const handleButtonClick = async () => {
    try {
      const response = await axios.post("http://localhost:5000/generate-qr", {
        url,
      });
      setQrCode(response.data);
    } catch (error) {
      console.error("Erro ao gerar o QR CODE", error);
    }
  };

  return (
    <>
      <div className="container">
        <h1>Gerador de Qr Code</h1>
        <div className="img-box">
          <img
            src={`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
              qrcode
            )}`}
            alt=""
          />
        </div>
        <input
          type="url"
          placeholder="Digite a URL"
          value={url}
          onChange={handleInputChange}
        />
        <button onClick={handleButtonClick}>Gerar Qr Code</button>
      </div>
    </>
  );
}

export default App;
