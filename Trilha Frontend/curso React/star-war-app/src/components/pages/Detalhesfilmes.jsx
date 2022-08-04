import styles from './Paginas.module.css'
import { useState } from "react";


const Detalhesfilmes = ({filme}) => {

    const[show,setShow]=useState(false);

    return (<div className={styles.containervalores}>
        
        <button onClick={()=>setShow(!show)} >{filme.title}</button>
        <div className={styles.detalhes}>
            {show?<p>Episódio: {filme.episode_id}</p>:null}
            {show?<p>Diretor: {filme.director}</p>:null}
            {show?<p>Produtor: {filme.producer}</p>:null}
            {show?<p>Data de lançamento: {filme.release_date}</p>:null}
            {show?<p>Data de lançamento: {filme}</p>:null}
            {show?<br></br>:null}
        </div>
    </div>
    );
}

export default Detalhesfilmes;