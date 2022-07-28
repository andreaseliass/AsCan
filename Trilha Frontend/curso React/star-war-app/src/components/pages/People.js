import { useEffect, useState } from "react";

import styles from './Paginas.module.css'

const peopleURL = "https://swapi.dev/api/people";

const People = () => {

    const [personagens, setFilmes] = useState([]);
    
    const getPersonagens = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setFilmes(data.results);
  };
  
  useEffect(() => {
    getPersonagens(peopleURL);
  }, []);

  return (
    <div className={styles.containervalores}>
      <h2 className={styles.valor}>Personagens:</h2>
      {personagens && personagens.map((personagem) => <p>{personagem.name}</p>)}
      {/* <div className="movies-container">
        {personagens.length > 0 &&
          personagens.map((film) => { film.title; })}
      </div> */}
    </div>
  );
};
export default People