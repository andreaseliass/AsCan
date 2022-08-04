import styles from './Paginas.module.css'
import { useState } from "react";


const Detalhesplanets = ({planetas}) => {

    const[show,setShow]=useState(false);

    return (<div className={styles.containervalores}>
        <button onClick={()=>setShow(!show)} >{planetas.name}</button>
        <div className={styles.detalhes}>
            {show?<p>Clima: {planetas.climate}</p>:null}
            {show?<p>População: {planetas.population}</p>:null}
            {show?<p>Diâmetro: {planetas.diameter}</p>:null}
            {show?<p>Terreno: {planetas.terrain}</p>:null}
            {show?<p>Período de rotação: {planetas.rotation_period}</p>:null}
            {show?<p>Período Orbital: {planetas.orbital_period}</p>:null}
            {show?<br></br>:null}
        </div>
    </div>
    );
}

export default Detalhesplanets;