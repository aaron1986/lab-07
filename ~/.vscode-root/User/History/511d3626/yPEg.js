function RickAshley() {
    let repsonse = prompt("Do you like Rick Ashley");
    let message = "I have given you up!";

    if(repsonse || repsonse.toLowerCase === "yes") {
        window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ/embed/VIDEO_ID?autoplay=1";
    } else if (repsonse === "no") {
        document.write(message); 
    }
    
} 