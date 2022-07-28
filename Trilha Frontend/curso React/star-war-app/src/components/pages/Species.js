import { useEffect, useState } from "react";

import styles from './Paginas.module.css'

const speciesURL = "https://swapi.dev/api/species/";

const Species = () => {

    const [especies, setEspecies] = useState([]);
    
    const getEspecies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setEspecies(data.results);
  };
  
  useEffect(() => {
    getEspecies(speciesURL);
  }, []);

  return (
    <div className={styles.containervalores}>
      <h2 className={styles.valor}>Espécies:</h2>
      {especies && especies.map((especie) => <p>{especie.name}</p>)}
      {/* <div className="movies-container">
        {especies.length > 0 &&
          especies.map((especie) => { especie.title; })}
      </div> */}
    </div>
  );
};
export default Species