document.querySelector('button').addEventListener('click', function (evt) {
    console.log(evt);
});

// const input = document.querySelector('input');
// input.addEventListener('keydown', function (evt) {
//     console.log(evt.key);
//     console.log(evt.code);
// });
// input.addEventListener('keyup', function () {
//     console.log('key up');
// });

window.addEventListener('keydown', function (e) {
    // console.log(e.code);
    switch(e.code) {
        case 'ArrowUp':
            console.log("up");
            break;
        case 'ArrowDown':
            console.log("down");
            break;
        case 'ArrowLeft':
            console.log("left");
            break;
        case 'ArrowRight':
            console.log("right");
            break;
        default:
            console.log("other");
    }
});