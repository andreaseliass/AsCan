import { useEffect, useState } from "react";
import Detalhesstarships from "./Detalhesstarships";


import styles from './Paginas.module.css'

const starchipsURL = "https://swapi.dev/api/starships/";

const Starchips = () => {

    const [naves, setNaves] = useState([]);
    
    const getNaves = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setNaves(data.results);
        console.log(data);
  };
  
  useEffect(() => {
    getNaves(starchipsURL);
  }, []);


  return (
    <div className={styles.containervalores}>
      <h2 className={styles.valor}>Naves:</h2>
      <div className={styles.container}>
        {naves.length === 0 && <p>Carregando...</p>}
        {naves.length > 0 && naves.map((nave) => <Detalhesstarships nave={nave} key={nave.name} />)}
      </div>
    </div>
  );
};
export default Starchips