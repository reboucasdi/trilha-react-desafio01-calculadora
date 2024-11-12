import React, { useState } from 'react';
import './App.css';git

function App() {
  const [display, setDisplay] = useState(""); // Estado para armazenar o valor mostrado no display

  const handleButtonClick = (value) => {
    setDisplay(display + value); // Adiciona o valor clicado ao display
  };

  const handleClear = () => {
    setDisplay(""); // Limpa o display
  };

  const handleCalculate = () => {
    try {
      setDisplay(eval(display)); // Calcula o valor do display
    } catch {
      setDisplay("Erro"); // Mostra erro se a expressão não for válida
    }
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        {/* Números */}
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("0")}>0</button>

        {/* Operações */}
        <button onClick={() => handleButtonClick("+")}>+</button>
        <button onClick={() => handleButtonClick("-")}>-</button>
        <button onClick={() => handleButtonClick("*")}>*</button>
        <button onClick={() => handleButtonClick("/")}>/</button>

        {/* Controle */}
        <button onClick={handleClear}>C</button>
        <button onClick={handleCalculate}>=</button>

        
      </div>
    </div>
  );
}


export default App;


