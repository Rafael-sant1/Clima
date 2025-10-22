import { useState } from 'react'
import './App.css'
import { CloudSun } from 'lucide-react';
import { MapPinned } from 'lucide-react';
import { Thermometer,Waves,Wind } from 'lucide-react';

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
                <MapPinned color="black" size={48} />
                Campinas,BR
              </div>
              <p className="desc-cidade">Nublado</p>
            </div>

            {/* Temperatura principal */}
            <div className="temperatura-box">
              <div className="temperatura-valor">
                28ºC
              </div>
              <div className="sens-termica">
                31ºC
              </div>
            </div>

            <div className="detalhes-box">
              <div className="detal-item">
                <div className="detal-icone">
                  <Thermometer color="black" size={25}/>
                </div>
                <p className="detal-desc">
                  Min/Max
                </p>
                <p className="detal-valor">
                  25ºC/28ºC
                </p>
              </div>

              <div className="detal-item">
                <div className="detal-icone">
                  <Waves color="black" size={25}/>
                </div>
                <p className="detal-desc">
                  Umidade
                </p>
                <p className="detal-valor">
                  20%
                </p>
              </div>

              <div className="detal-item">
                <div className="detal-icone">
                  <Wind />
                </div>
                <p className="detal-desc">
                  vento
                </p>
                <p className="detal-valor">
                  12 km/h
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
