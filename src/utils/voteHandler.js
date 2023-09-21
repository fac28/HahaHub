const vote = (id, direction, jokesArray) => {
    const index = jokesArray.findIndex((joke) => joke.id === id);
  
    if (index !== -1) {
      if (direction === "up") {
        jokesArray[index].score++;
      } else if (direction === "down") {
        jokesArray[index].score--;
      }
    }
  };
  

module.exports = vote;
