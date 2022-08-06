import { useEffect, useState } from "react";
import Detalhesstarships from "./Detalhesstarships";
import styles from './Paginas.module.css'

const Starchips = () => {

  const [naves, setStarships] = useState([]);
      
  async function getPeople() {
    let allData = [];
    let temmaispaginas = true;
    let currentPage = 0;
  
    while(temmaispaginas) {
      currentPage++;
      const response = await fetch(`https://swapi.dev/api/starships/?page=${currentPage}`)
      let data = await response.json();
      const total_pages = 4;
      allData.push(data.results); //allData é um array de arrays
      temmaispaginas = currentPage < total_pages; //quando for false sai do while
    }
    //transformando um array de arrays em apenas um array:
    let resultados = []
    for (var i=0; i < 4; i++) {
      let x = allData[i]
      for (var k=0; k < x.length; k++){
        resultados.push(x[k])
      }
  } 
  setStarships(resultados);
  }

useEffect(() => {
  getPeople();
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