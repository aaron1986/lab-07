function RickAshley() {
    let repsonse = prompt("Do you like Rick Ashley");
    document.write(repsonse);
    let message = "";

    if(repsonse == true) {
        window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    } else {
        message = "You have given me up!"
    }

    return RickAshley;
    
}