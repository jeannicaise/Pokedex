import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyTitle from "./components/MyTitle"
import PokemonCard from "./components/PokemonCard"



function App() {
  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];
    const [index, setIndex] = useState(0)

    const handlePrevClick =() => {setIndex(index-1)}
    const handleNextClick =() => {setIndex(index+1)}
    
    
    let pokemon = pokemonList[index]
  return (
    <div>
      <MyTitle/>
      <PokemonCard pokemon={pokemon}/>
      <button onClick={handlePrevClick}> Précedent</button>
      <button onClick={handleNextClick}> Suivant</button>

    </div>
    
  );
}

export default App
