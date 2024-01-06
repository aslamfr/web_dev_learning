// const form = document.querySelector('#searchForm');
// form.addEventListener('submit', async function (e) {
//     e.preventDefault();
//     const searchTerm = form.elements.query.value;
//     const config = { params: { q: searchTerm } }
//     const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
//     makeImages(res.data)
//     form.elements.query.value = '';
// })

// const makeImages = (shows) => {
//     for (let result of shows) {
//         if (result.show.image) {
//             const img = document.createElement('IMG');
//             img.src = result.show.image.medium;
//             document.body.append(img)
//         }
//     }
// }

const form = document.querySelector('#searchForm');
let isInputed = false;

form.addEventListener('submit', async function (e) {
  e.preventDefault();
  if (isInputed) {
    removeImages();
  } else {
    isInputed = true
  }
  const movieData = await getMovieData();
  // console.log(movieData);
  makeImages(movieData);
  form.elements.query.value = "";
})

const getMovieData = async () => {
  try {
    const searchInput = form.elements.query.value;
    const config = { params: { q: searchInput } };
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    console.log(res.data);
    return res.data;
  } catch (e) {
    console.log("Error", e);
  }
}

const makeImages = (shows) => {
  for (let result of shows) {
    const resultDiv = document.createElement('div');
    const resultP = document.createElement('p');
    const resultImg = document.createElement('img');
    if (result.show.image) {
      resultImg.src = result.show.image.medium;
      resultImg.alt = result.show.name;
      resultP.append(result.show.name);
      resultDiv.append(resultImg);
      resultDiv.append(resultP);
      resultDiv.classList.add("movieResult");
      document.body.append(resultDiv);
    }
  }
}

const removeImages = () => {
  const images = document.querySelectorAll(".movieResult");
  for (let img of images) {
    img.remove();
  }
}