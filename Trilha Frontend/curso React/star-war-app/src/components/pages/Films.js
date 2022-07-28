import { useEffect, useState } from "react";

import styles from './Paginas.module.css'

const filmsURL = "https://swapi.dev/api/films";

const Films = () => {

    const [filmes, setFilmes] = useState([]);
    
    const getFilmes = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setFilmes(data.results);
  };
  
  useEffect(() => {
    const swfilmes = `${filmsURL}`;
    console.log(swfilmes);
    getFilmes(swfilmes);
  }, []);

  console.log(filmes);

  return (
    <div className={styles.containervalores}>
      <h2 className={styles.valor}>Filmes:</h2>
      {filmes && filmes.map((filme) => <p>{filme.title}</p>)}
      {/* <div className="movies-container">
        {filmes.length > 0 &&
          filmes.map((film) => { film.title; })}
      </div> */}
    </div>
  );
};
export default Films