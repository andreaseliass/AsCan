import styles from './Paginas.module.css'
import { useState } from "react";


const Detalhespeople = ({personagens}) => {

    const[show,setShow]=useState(false);

    return (<div className={styles.containervalores}>
        <button onClick={()=>setShow(!show)} >{personagens.name}</button>
        <div className={styles.detalhes}>
            {show?<p>Gênero: {personagens.gender}</p>:null}
            {show?<p>Altura: {personagens.height} cm</p>:null}
            {show?<p>Peso: {personagens.mass} kg</p>:null}
            {show?<p>Ano de nascimento: {personagens.birth_year}</p>:null}
            {show?<p>Cor do cabelo: {personagens.hair_color}</p>:null}
            {show?<p>Cor dos olhos: {personagens.eye_color}</p>:null}
            {show?<br></br>:null}
        </div>
    </div>
    );
}

export default Detalhespeople;