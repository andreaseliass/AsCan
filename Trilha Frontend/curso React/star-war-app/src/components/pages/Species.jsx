import { useEffect, useState } from "react";
import styles from './Paginas.module.css'
import Detalhesspecies from "./Detalhesspecies";

const Species = () => {

    const [especies, setEspecies] = useState([]);
    
    async function getEspecies() {
      let allData = [];
      let temmaispaginas = true;
      let currentPage = 0;
    
      while(temmaispaginas) {
        currentPage++;
        const response = await fetch(`https://swapi.dev/api/species/?page=${currentPage}`)
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
    resultados = resultados.sort((especie1, especie2)=> especie1.name > especie2.name ? 1 : -1);
      setEspecies(resultados);
    }
  
  useEffect(() => {
    getEspecies();
  }, []);

  return (
    <div className={styles.containervalores}>
      <h2 className={styles.valor}>Espécies:</h2>
      <div className={styles.container}>
        {especies.length === 0 && <p>Carregando...</p>}
        {especies.length > 0 && especies.map((especie) => <Detalhesspecies especie={especie} key={especie.name} />)}
      </div>
    </div>
  );
};
export default Species