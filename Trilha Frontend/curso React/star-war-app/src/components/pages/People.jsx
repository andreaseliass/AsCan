import { useEffect, useState } from "react";
import Detalhespeople from "./Detalhespeople";
import styles from './Paginas.module.css'

const People = () => {

    const [personagens, setPeople] = useState([]);
        
    async function getPeople() {
      let allData = [];
      let temmaispaginas = true;
      let currentPage = 0;
    
      while(temmaispaginas) {
        currentPage++;
        const response = await fetch(`https://swapi.dev/api/people/?page=${currentPage}`)
        let data = await response.json();
        const total_pages = 9;
        allData.push(data.results); //allData é um array de arrays
        temmaispaginas = currentPage < total_pages; //quando for false sai do while
      }
      //transformando um array de arrays em apenas um array:
      let resultados = []
      for (var i=0; i < 9; i++) {
        let x = allData[i]
        for (var k=0; k < x.length; k++){
          resultados.push(x[k])
        }
    } 
    setPeople(resultados);
    }
  
  useEffect(() => {
    getPeople();
  }, []);
  

  return (
    <div className={styles.containervalores}>
      <h2 className={styles.valor}>Personagens:</h2>
      <div className={styles.container}>
        {personagens.length === 0 && <p>Carregando...</p>}
        {personagens.length > 0 && personagens.map((personagens) => <Detalhespeople personagens={personagens} key={personagens.name} />)}
      </div>
    </div>
  );
};
export default People