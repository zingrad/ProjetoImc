import { useState } from "react";
import './App.css';

function App() {
  const [imc, setImc] = useState(0);
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState(0);

  const calcularIMC = () => {
    let alturaMetros;

    if (altura.includes(',')) {
      alturaMetros = parseFloat(altura.replace(',', '.')); 
    } else {
      alturaMetros = parseFloat(altura) / 100; 
    }

    if (isNaN(alturaMetros) || alturaMetros <= 0 || peso <= 0) {
      alert("Por favor, ingrese valores válidos para altura e peso.");
      return;
    }

    const calculatedIMC = peso / (alturaMetros * alturaMetros);
    setImc(calculatedIMC);
  };

  return (
    <div className="container">
      <h1>Calculadora de IMC</h1>
      <input
        type="text"
        placeholder="Altura (cm ou m)"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
      />
      <br />
      <br />
      <input
        type="number"
        placeholder="Peso (kg)"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
      />
      <button onClick={calcularIMC}>Calcular</button>
      {imc <= 18.5 && (
        <h2 className="resultado">Você está abaixo do peso, seu IMC é:  {imc.toFixed(1)}</h2>
      )}
      {imc > 18.5 && imc <= 24.9 && (
        <h2 className="resultado">Você está com peso normal, seu IMC é:  {imc.toFixed(1)}</h2>
      )}
      {imc >= 25 && imc <= 29.9 && (
        <h2 className="resultado">Você está com Sobrepeso, seu IMC é:  {imc.toFixed(1)}</h2>
      )}
      {imc >= 30 && imc <= 34.9 && (
        <h2 className="resultado">Você está com Obesidade grau 1, seu IMC é:  {imc.toFixed(1)}</h2>
      )}
      {imc >= 35 && imc <= 39.9 && (
        <h2 className="resultado">Você está com Obesidade grau 2, seu IMC é:  {imc.toFixed(1)}</h2>
      )}
      {imc >= 40 && (
        <h2 className="resultado">Você está com Obesidade grau 3, seu IMC é:  {imc.toFixed(1)}</h2>
      )}
    </div>
  );
}

export default App;