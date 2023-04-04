function MyTitle({setIndex,pokemon}) {
    return <div>
      {pokemon.map((el,index) => (
      <button key={el.name} onClick={() =>{setIndex(index)}}>{el.name}</button>)
  )}      </div>

  }
  
  export default MyTitle;