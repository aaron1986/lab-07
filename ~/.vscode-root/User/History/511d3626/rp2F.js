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
    let repsonse = prompt("Do you like Rick Ashley? ");
    let message = "I have given you up!";

    if(repsonse && repsonse.toLowerCase() == "yes") {
       let video = document.createElement("video");
       video.width = 400;
       video.height = 600;
       video.autoplay = true;
       video.muted = true;
       video.innerHTML = '<source src="./media/rick.mp4" type="video/mp4">';

       document.body.appendChild(video);
       video.play();
    } else if(repsonse && repsonse.toLowerCase() == "no") {
        document.write(message); 
    }
}