import styles from './Paginas.module.css'
import { useState } from "react";


const Detalhesplanets = ({planetas}) => {

    const[show,setShow]=useState(false);

    return (<div className={styles.containervalores}>
        <button onClick={()=>setShow(!show)} >{planetas.name}</button>
        <div className={styles.detalhes}>
            {show?<p><b>Clima: </b> {planetas.climate}</p>:null}
            {show?<p><b>População: </b> {planetas.population}</p>:null}
            {show?<p><b>Diâmetro: </b> {planetas.diameter}</p>:null}
            {show?<p><b>Terreno: </b> {planetas.terrain}</p>:null}
            {show?<p><b>Período de rotação: </b> {planetas.rotation_period} horas</p>:null}
            {show?<p><b>Período Orbital: </b> {planetas.orbital_period} dias</p>:null}
            {show?<br></br>:null}
        </div>
    </div>
    );
}

export default Detalhesplanets;