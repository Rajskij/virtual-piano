document.addEventListener("keypress", function (e) {
    if (e.code == "KeyA") {
        console.log("The 'A' key is pressed.");
    } else if (e.code == "KeyS") {
        console.log("The 'S' key is pressed.");
    } else if (e.code == "KeyD") {
        console.log("The 'D' key is pressed.");
    } else if (e.code == "KeyF") {
        console.log("The 'F' key is pressed.");
    } else if (e.code == "KeyG") {
        console.log("The 'G' key is pressed.");
    } else if (e.code == "KeyH") {
        console.log("The 'H' key is pressed.");
    } else if (e.code == "KeyJ") {
        console.log("The 'J' key is pressed.");
    } else {
        console.log("Warning! The wrong key is pressed!");
    }
});