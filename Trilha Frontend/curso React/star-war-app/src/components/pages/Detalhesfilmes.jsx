import styles from './Paginas.module.css'
import { useState } from "react";


const Detalhesfilmes = ({filme}) => {

    const[show,setShow]=useState(false);

    return (<div className={styles.containervalores}>
        
        <button onClick={()=>setShow(!show)} >{filme.title}</button>
        <div className={styles.detalhes}>
            {show?<p><b>Episódio: </b>{filme.episode_id}</p>:null}
            {show?<p><b>Diretor: </b>{filme.director}</p>:null}
            {show?<p><b>Produtor: </b>{filme.producer}</p>:null}
            {show?<p><b>Data de lançamento: </b>{filme.release_date}</p>:null}
            {show?<br></br>:null}
        </div>
    </div>
    );
}

export default Detalhesfilmes;