import { useEffect, useState } from "react";

import styles from './Paginas.module.css'

import Detalhesvehicles from "./Detalhesvehicles";

const vehiclesURL = "https://swapi.dev/api/vehicles/";

const Vehicles = () => {

    const [veiculos, setVeiculos] = useState([]);
    
    const getVeiculos = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setVeiculos(data.results);
  };
  
  useEffect(() => {
    getVeiculos(vehiclesURL);
  }, []);


  return (
    <div className={styles.containervalores}>
      <h2 className={styles.valor}>Veículos:</h2>
      <div className={styles.container}>
        {veiculos.length === 0 && <p>Carregando...</p>}
        {veiculos.length > 0 && veiculos.map((veiculo) =><Detalhesvehicles veiculo={veiculo} key={veiculo.name} />)}
      </div> 
    </div>
  );
};
export default Vehicles