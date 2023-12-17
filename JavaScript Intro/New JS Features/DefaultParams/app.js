// ==========================================
// AN OLDER WAY OF ADDING DEFAULT PARAM VALUE
// ==========================================

function rollDieOld (numSides) {
    if (numSides === undefined) {
        numSides = 6;
    }
    return Math.floor(Math.random() * numSides) +1;
}

// ============
// THE NEW WAY!
// ============
function rollDie (numSides = 6) {
    return Math.floor(Math.random() * 6) + 1;
}

function greet (person, msg = "Hey there!,", punct = "!") {
    console.log(`${msg} ${person}${punct}`);
}
