import styles from './PokemonCard.module.css'

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function PokemonCard() {
 
    let pokemon = pokemonList[0]
    // pokemon = pokemonList[1]

    return <div>{pokemon===pokemonList[0]? 
    <figure className={styles.card}>
        <img src={pokemon.imgSrc} alt={pokemon.name}
        className={styles.cardImg}/>
        <figcaption>{pokemon.name}</figcaption>
    </figure>:<figure className={styles.card}> <p>???</p>   
        <figcaption>{pokemonList[1].name}</figcaption></figure>}
    </div>
    ;
  }
  
  export default PokemonCard;
