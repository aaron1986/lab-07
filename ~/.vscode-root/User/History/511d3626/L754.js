/* function RickAshley() {
    let repsonse = prompt("Do you like Rick Ashley");
    let message = "I have given you up!";

    if(repsonse == "yes") {
        window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    } else if (repsonse == "no") {
        document.write(message); 
    }
    
} */


function playVideo() {
    let repsonse = prompt("");

    if(repsonse && repsonse.toLowerCase() == "yes") {
        let video = document.getElementById("musicVideo")

        video.play();
    }
}