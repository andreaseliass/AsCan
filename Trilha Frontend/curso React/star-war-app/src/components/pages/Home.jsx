import { Link } from 'react-router-dom'
import filmes from '../../img/movies.png'
import people from '../../img/people.webp'
import planets from '../../img/planets.webp'
import species from '../../img/species.jpg'
import styles from './Paginas.module.css'

function Home(){
    return (
    <> 
         <Link to="/films">
            <div className={styles.card}>
                <img src={filmes} alt="Filmes" width='360px' height='350px'></img>
                <div className={styles.containerhome}>
                    <h2><b>Filmes</b></h2>
                </div>
            </div>
         </Link>
        
        
        <div className={styles.card}>
            <Link to="/films">
                <img src={people} alt="Filmes" width='360px' height='350px' text-align='center'></img>
                <div className={styles.containerhome}>
                    <h2><b>Personagens</b></h2>
                </div>
            </Link>

        </div>

        <div className={styles.card}>
            <img src={planets} alt="Filmes" width='360px' height='350px' onclick="location.href='/films';"></img>
            <div className={styles.containerhome}>
                <h2><b>Planetas</b></h2>
            </div>

        </div>
        <div className={styles.card}>
            <img src={species} alt="Filmes" width='360px' height='350px'></img>
            <div className={styles.containerhome}>
                <h2><b>Espécies</b></h2>
            </div>

        </div>

        <div className={styles.card}>
            <img src={filmes} alt="Filmes" width='360px' height='350px'></img>
            <div className={styles.containerhome}>
                <h2><b>Naves</b></h2>
            </div>

        </div>
         <div className={styles.card}>
            <img src={filmes} alt="Filmes" width='360px' height='350px'></img>
            <div className={styles.containerhome}>
                <h2><b>Veículos</b></h2>
            </div>

        </div>
    </>  
    
    
    )
}

export default Home