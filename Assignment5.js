var c = 0;
    function bulb(){
      if(c==0){
        document.getElementById('img').src = "images/bulbon.jpg";
        document.getElementById('img1').src = "images/bulbon.jpg";
        document.getElementById('img2').src = "images/bulbon.jpg";
        document.getElementById('img3').src = "images/bulbon.jpg";
        document.getElementById('img4').src = "images/bulbon.jpg";
        document.getElementById("button").innerHTML = "Turn OFF";
        c=1;
      }
      else if(c==1){
        document.getElementById("img").src = "images/bulboff.jpg";
        document.getElementById("img1").src = "images/bulboff.jpg";
        document.getElementById("img2").src = "images/bulboff.jpg";
        document.getElementById("img3").src = "images/bulboff.jpg";
        document.getElementById("img4").src = "images/bulboff.jpg";
        document.getElementById("button").innerHTML = "Turn ON";
        c=0;
      }
    }