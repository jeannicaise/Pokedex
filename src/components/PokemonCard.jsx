import styles from './PokemonCard.module.css'
import PropTypes from "prop-types";


function PokemonCard({pokemon}) {

    PokemonCard.propTypes = {
        pokemon: PropTypes.shape({
          name: PropTypes.string.isRequired,
          imgSrc: PropTypes.string.isOptionnal,
        }).isRequired,
      }
    return(
    <figure className={styles.card}>
        {pokemon.imgSrc?  <img src={pokemon.imgSrc} alt={pokemon.name}
        className={styles.cardImg}/>:<p>???</p>                    }
       
        <figcaption>{pokemon.name}</figcaption>
    </figure>
    )
    }

  
  export default PokemonCard;
