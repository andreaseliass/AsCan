import { useEffect, useState } from "react";

import styles from './Paginas.module.css'

import Detalhes from "./Detalhes";



const filmsURL = "https://swapi.dev/api/films";

const Films = () => {

    const [filmes, setFilmes] = useState([]);
    
    const getFilmes = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setFilmes(data.results);
  };
  
  useEffect(() => {
    getFilmes(filmsURL);
  }, []);



  return (
    <div className={styles.containervalores}>
      <h2 className={styles.valor}>Filmes:</h2>
      <div className={styles.container}>
        {filmes.length === 0 && <p>Carregando...</p>}
        {filmes && filmes.map((filme) => <Detalhes filme={filme} />)}
      </div>
    </div>
  );
};
export default Films