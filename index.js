    window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    
    document.getElementById("navbar").style.background = "#501e27";
  } else {
   
    document.getElementById("navbar").style.background = "none";
  }
}

window.player = new window.YT.Player(video, {
  videoId: videoId,
  playerVars: {
    autoplay: 1,
    modestbranding: 1,
    rel: 0
    // more parameters here
  }
});