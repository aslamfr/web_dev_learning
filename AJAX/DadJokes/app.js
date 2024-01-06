const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

const addJoke = async () => {
  const jokeData = await getDadJoke();
  const newLI = document.createElement('li');
  newLI.append(jokeData);
  jokes.append(newLI);
  console.log( jokeData)
}

const getDadJoke = async () => {
  try {
    const config = {headers: {Accept: "application/json"}};
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    // console.log(res.data.joke)
    return res.data.joke;
  } catch (e) {
    console.log("Error", e);
    return e
  }
}

button.addEventListener("click", addJoke);