const vote = (id, direction, jokesArray) => {
    let index = jokesArray.findIndex((joke) => {
      return joke.id == id;
    });
    jokesArray[index].score++;
  };
  

module.exports = vote;
