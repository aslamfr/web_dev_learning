// regular function
// const add = function(x,y) {
//     return x + y;
// }

// arrow function
const add = (x, y) => {
    return x + y;
}

const square = (x) => {
    return x * x;
}

// const rollDIe = () => {
//     return Math.floor(Math.random() * 6) + 1;
// }

// implicit return
const rollDie = () => (
     Math.floor(Math.random() * 6) + 1
);

const added = (a,b) => a + b;


const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

// const newMovies = movies.map(function(movie) {
//     return `${movie.title} - ${movie.score/10}`
// })

const newMovies = movies.map((movie) => {
    return `${movie.title} - ${movie.score/10}`
})



