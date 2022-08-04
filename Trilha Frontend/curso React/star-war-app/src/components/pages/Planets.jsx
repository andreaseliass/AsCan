import { useEffect, useState } from "react";

import styles from './Paginas.module.css'

import Detalhesplanets from "./Detalhesplanets";

const planetsURL = "https://swapi.dev/api/planets";

const Planets = () => {

    const [planetas, setPlanetas] = useState([]);
    
    const getPlanetas = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setPlanetas(data.results);
  };
  
  useEffect(() => {
    getPlanetas(planetsURL);
  }, []);


  return (
    <div className={styles.containervalores}>
      <h2 className={styles.valor}>Planetas:</h2>
      <div className={styles.container}>
        {planetas.length === 0 && <p>Carregando...</p>}
        {planetas.length > 0 && planetas.map((planetas) => <Detalhesplanets planetas={planetas} key={planetas.name} />)}
      </div>
    </div>
  );
};
export default Planets