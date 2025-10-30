import { useState } from 'react'
import './App.css'
import { CloudSun } from 'lucide-react';
import { MapPinned } from 'lucide-react';
import { Thermometer,Waves,Wind } from 'lucide-react';

function App() {
  const [cidade, setCidade] = useState("");
  const [clima,setClima] = useState(null);
  const [carregando, SetCarregando] = useState(false);
  const [erro, SetErro] =useState("");

  const buscarClima = async () =>{
    if(!cidade.trim()){
      SetErro("❗ Por favor, digite uma cidade ❗");
      return;
    }
  
  SetCarregando(true);
  SetErro("");

  try{
    //Aqui fica o link e api_key
    const API_KEY = "50878f4678cd0841144b44b2fca0ccc0";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API_KEY}&units=metric&lang=pt_br`;
    console.log("URL da requisição", url);
    const resposta = await fetch(url);

    if(!resposta.ok){
      throw new Error("❌ Cidade não encontrada ❌")
    }
    const dados = await resposta.json();
    setClima(dados);
  } catch (error) {
    SetErro(error.message);
    setClima(null);
  } finally {
    SetCarregando(false);
  }
};
  const handleKeyPress = (e) =>{
    if (e.key === "Enter"){
      buscarClima();
    }
  };

  return(
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
              <input type="text"  
              placeholder="Cidade..." 
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              onKeyDown={handleKeyPress}
              />
              <button
                onClick={buscarClima}
                disabled={carregando}
              >
                 {carregando ? "Buscando..." : "Buscar"}
              </button>
            </div>
            {erro  && <p className="erro-message">{erro}</p>}
          </div>

          {clima && (<>
          {/* Resultado do Clima */}
          <div className="card-resultado">
            <div className="info-cidade">
              <div className="nome-cidade">
                <MapPinned color="black" size={48} />
                {clima.name},{clima.sys.country}
              </div>
              <p className="desc-cidade">
                {clima.weather[0].description}
              </p>
            </div>

            {/* Temperatura principal */}
            <div className="temperatura-box">
              <div className="temperatura-valor">
                {Math.round(clima.main.temp)}ºC
              </div>
              <div className="sens-termica">
                Sensação termica: {Math.round(clima.feels_like)}ºC
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
                  {Math.round(clima.main.temp_min)}ºC/
                  {Math.round(clima.main.temp_max)}ºC
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
                  {clima.main.humidity}%
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
                  {Math.round(clima.wind.speed * 3.6)} km/h
                </p>
              </div>
            </div>
          </div>
          </>)}
        </div>
      </div>
    </>
  )
};

export default App
