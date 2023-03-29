import styles from './PokemonCard.module.css'



function PokemonCard(props) {
 

    return(
    <figure className={styles.card}>
        <img src={props.pokemon.imgSrc} alt={props.pokemon.name}
        className={styles.cardImg}/>
        <figcaption>{props.pokemon.name}</figcaption>
    </figure>
    )
    }

  
  export default PokemonCard;
