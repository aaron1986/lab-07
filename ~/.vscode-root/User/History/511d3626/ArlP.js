function RickAshley() {
    let repsonse = prompt("Do you like Rick Ashley");
    let message = "";

    if(repsonse == "yes") {
        window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    } else if (repsonse == "no") {
        message = "You have given me up!"
    }
    
}