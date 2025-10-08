import { useState } from 'react'
import './App.css'
import { CloudSun } from 'lucide-react';
import { MapPinned } from 'lucide-react';

function App() {

  return (
    <>
      <div className="app-container">
        <div className="content-wrapper">
          <header>
            <h1>
            <CloudSun color="white" size={48} />
            Consulta de Clima</h1>
            <p>Exemplo de consumo de API com React</p>
          </header>

          <div className="busca-box">
            <div className="busca-container">
              <input type="text" />
              <button>Buscar</button>
            </div>
          </div>

          {/* Resultado do Clima */}
          <div className="card-resultado">
            <div className="info-cidade">
              <div className="nome-cidade">
                <MapPinned color="white" size={48} />
                Campinas,BR
              </div>
              <p className="desc-cidade">Nublado</p>
            </div>

            {/* Temperatura principal */}
          </div>

        </div>
      </div>
    </>
  )
}

export default App
