

// const tweetForm = document.querySelector('#tweetForm');
// const tweetsContainer = document.querySelector('#tweets');
// tweetForm.addEventListener('submit', function (e) {
//     e.preventDefault();

//     // const usernameInput = document.querySelectorAll('input')[0];
//     // const tweetInput = document.querySelectorAll('input')[1];
//     const usernameInput = tweetForm.elements.username;
//     const tweetInput = tweetForm.elements.tweet;
//     addTweet(usernameInput.value, tweetInput.value)
//     usernameInput.value = '';
//     tweetInput.value = '';
// });

// const addTweet = (username, tweet) => {
//     const newTweet = document.createElement('li');
//     const bTag = document.createElement('b');
//     bTag.append(username)
//     newTweet.append(bTag);
//     newTweet.append(`- ${tweet}`)
//     tweetsContainer.append(newTweet);
// }

const form = document.querySelector('#tweetForm');
// const userInput = document.querySelector("#usernameInput"); 
// const tweetInput = document.querySelector('#tweetInput');
const list = document.querySelector('#tweets');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const userInput = form.elements.username;
  const tweetInput = form.elements.tweet;
  // console.log(userInput.value);

  const user = userInput.value;
  const tweeted = tweetInput.value;
  const newLi = document.createElement("li");
  newLi.innerHTML = `<b>${user}</b> - ${tweeted}`
  list.append(newLi);
  userInput.value = "";
  tweetInput.value = "";
})