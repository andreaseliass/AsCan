import { useEffect, useState } from "react";

import styles from './Paginas.module.css'

const starchipsURL = "https://swapi.dev/api/starships/";

const Starchips = () => {

    const [naves, setNaves] = useState([]);
    
    const getNaves = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setNaves(data.results);
  };
  
  useEffect(() => {
    getNaves(starchipsURL);
  }, []);


  return (
    <div className={styles.containervalores}>
      <h2 className={styles.valor}>Naves:</h2>
      <div className={styles.container}>
        {naves.length === 0 && <p>Carregando...</p>}
        {naves.length > 0 && naves.map((nave) => <p>{nave.name}</p>)}
      </div>
    </div>
  );
};
export default Starchips