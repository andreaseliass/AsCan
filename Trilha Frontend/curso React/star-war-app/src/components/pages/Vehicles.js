import { useEffect, useState } from "react";

import styles from './Paginas.module.css'

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
      {veiculos && veiculos.map((veiculo) => <p>{veiculo.name}</p>)}
      {/* <div className="movies-container">
        {veiculos.length > 0 &&
          veiculos.map((veiculo) => { veiculo.title; })}
      </div> */}
    </div>
  );
};
export default Vehicles