import styles from './Paginas.module.css'
import { useState } from "react";


const Detalhesfilmes = ({filme}) => {

    const[show,setShow]=useState(false);

    return (<div className={styles.containervalores}>
        
        <button onClick={()=>setShow(!show)} >{filme.title}</button>
        {show && (
        <div className={styles.detalhes}>
            <p><b>Episódio: </b>{filme.episode_id}</p>
            <p><b>Diretor: </b>{filme.director}</p>
            <p><b>Produtor: </b>{filme.producer}</p>
            <p><b>Data de lançamento: </b>{filme.release_date.split('-')[2] +
              '/' +
              filme.release_date.split('-')[1] +
              '/' +
              filme.release_date.split('-')[0]}</p>
            <br></br>
        </div>)}
    </div>
    );
}

export default Detalhesfilmes;