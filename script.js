document.addEventListener("keypress", function (e) {
    if (e.code == "KeyA") {
        new Audio("white_keys/A.mp3").play();
    } else if (e.code == "KeyS") {
        new Audio("white_keys/S.mp3").play();
    } else if (e.code == "KeyD") {
        new Audio("white_keys/D.mp3").play();
    } else if (e.code == "KeyF") {
        new Audio("white_keys/F.mp3").play();
    } else if (e.code == "KeyG") {
        new Audio("white_keys/G.mp3").play();
    } else if (e.code == "KeyH") {
        new Audio("white_keys/H.mp3").play();
    } else if (e.code == "KeyJ") {
        new Audio("white_keys/J.mp3").play();
    }  else if (e.code == "KeyW") {
        new Audio("black_keys/W.mp3").play();
    } else if (e.code == "KeyE") {
        new Audio("black_keys/E.mp3").play();
    } else if (e.code == "KeyT") {
        new Audio("black_keys/T.mp3").play();
    } else if (e.code == "KeyY") {
        new Audio("black_keys/Y.mp3").play();
    } else if (e.code == "KeyU") {
        new Audio("black_keys/U.mp3").play();
    }
});

/*
const keys = {
    "KeyA": "white_keys/A.mp3", 'KeyS': "white_keys/S.mp3",
    'KeyD': "white_keys/D.mp3", 'KeyF': "white_keys/F.mp3",
    'KeyG': "white_keys/G.mp3", 'KeyH': "white_keys/H.mp3",
    'KeyJ': "white_keys/J.mp3", 'KeyW': "black_keys/W.mp3",
    'KeyE': "black_keys/E.mp3", 'KeyT': "black_keys/T.mp3",
    'KeyY': "black_keys/Y.mp3", 'KeyU': "black_keys/U.mp3"};

document.addEventListener("keypress", (e) =>{
   if (e.code in keys) {
       new Audio(keys[e]).play();
   }
});*/
