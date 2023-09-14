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
       let video = document.createElement("iframe");
       video.width = 400;
       video.height = 600;
    //    video.innerHTML = '<source src="./media/rick.mp4" type="video/mp4">';

        video.src = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        video.frameborder = 0;
        video.allowFullscreen = true;

       document.body.appendChild(video);
       video.play();
    } else if(repsonse && repsonse.toLowerCase() == "no") {
        document.write(message); 
    }
}