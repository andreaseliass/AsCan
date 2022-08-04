import { useEffect, useState } from "react";
import Detalhespeople from "./Detalhespeople";

import styles from './Paginas.module.css'

const peopleURL = "https://swapi.dev/api/people";

const People = () => {

    const [personagens, setPeople] = useState([]);
    
    const getPersonagens = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setPeople(data.results);
  };
  
  useEffect(() => {
    getPersonagens(peopleURL);
  }, []);

  return (
    <div className={styles.containervalores}>
      <h2 className={styles.valor}>Personagens:</h2>
      <div className={styles.container}>
        {personagens.length === 0 && <p>Carregando...</p>}
        {personagens.length > 0 && personagens.map((personagens) => <Detalhespeople personagens={personagens} />)}
      </div>
    </div>
  );
};
export default People