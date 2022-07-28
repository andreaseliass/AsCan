import { useEffect, useState } from "react";

import styles from './Paginas.module.css'

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
      {planetas && planetas.map((planeta) => <p>{planeta.name}</p>)}
      {/* <div className="movies-container">
        {planetas.length > 0 &&
          planetas.map((film) => { planeta.title; })}
      </div> */}
    </div>
  );
};
export default Planets