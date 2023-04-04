function MyTitle({handlePrevClick,handleNextClick}) {
    return <div>
    <button  onClick={handlePrevClick}> Précedent</button>
      <button onClick={handleNextClick}> Suivant</button>
      </div>

  }
  
  export default MyTitle;