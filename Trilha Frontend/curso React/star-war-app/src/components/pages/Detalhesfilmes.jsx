import styles from "./Paginas.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Starchips from "./Starships";

const Detalhesfilmes = ({ filme }) => {
  const [show, setShow] = useState(false);

  const [personagens, setPeople] = useState([]);
  const [naves, setStarships] = useState([]);

  async function getPeople() {
    let allData = [];
    let temmaispaginas = true;
    let currentPage = 0;

    while (temmaispaginas) {
      currentPage++;
      const response = await fetch(
        `https://swapi.dev/api/people/?page=${currentPage}`
      );
      let data = await response.json();
      const total_pages = 9;
      allData.push(...data.results);
      temmaispaginas = currentPage < total_pages; //quando for false sai do while
    }

    // allData.splice(16, 0, null); //preenchendo um espaço que não existe na api
    setPeople(allData);
  }


  useEffect(() => {
    getPeople();
  }, []);

  return (
    <div className={styles.containervalores}>
      <button onClick={() => setShow(!show)}>{filme.title}</button>
      {show && (
        <div className={styles.detalhes}>
          <p>
            <b>Episódio: </b>
            {filme.episode_id}
          </p>
          <p>
            <b>Diretor: </b>
            {filme.director}
          </p>
          <p>
            <b>Produtor: </b>
            {filme.producer}
          </p>
          <p>
            <b>Data de lançamento: </b>
            {filme.release_date.split("-")[2] +
              "/" +
              filme.release_date.split("-")[1] +
              "/" +
              filme.release_date.split("-")[0]}
          </p>

          <div>
            <b>Personagens:</b>
            {personagens.length === 0 && <p>Carregando...</p>}
            {personagens.length > 0 &&
              filme.characters.map((peopleURL) => (
                <Link
                  to={`/people/?id=${peopleURL.split("/")[5]}`}
                  key={peopleURL}
                >
                  <p>
                    {personagens
                      .filter((p) => peopleURL === p?.url)
                      .map((p) => p.name)}
                  </p>
                </Link>
              ))}
          </div>

          <div>
            <b>Planetas:</b>
            {naves.length === 0 && <p>Carregando...</p>}
            {naves.length > 0 &&
              filme.starships.map((navesURL) => (
                <Link
                  to={`/starships/?id=${navesURL.split("/")[5]}`}
                  key={navesURL}
                >
                  <p>
                    {personagens
                      .filter((p) => navesURL === p?.url)
                      .map((p) => p.name)}
                  </p>
                </Link>
              ))}
          </div>
          <br></br>
        </div>
      )}
    </div>
  );
};

export default Detalhesfilmes;
