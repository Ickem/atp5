

function mySlider(ssid,width,height,pause){
  let slider = document.getElementById(ssid);
  let dspwidth=width;
  let dspheight=height;
  let imgcount=slider.children[0].getElementsByTagName('img').length;
  slider.style.width=dspwidth+'px';
  slider.style.height=dspheight+'px';
  slider.children[0].style.width=(imgcount*dspwidth)+'px';
  slider.children[0].style.height=dspheight+'px';
  slider.children[0].style.left='0px';
  
  iid=window.setInterval(function(){
    let minleft=-1*(dspwidth*(imgcount-1));
    if(minleft>=parseInt(slider.children[0].style.left)){
      slider.children[0].style.left='0px';
    } else {
      slider.children[0].style.left=(parseInt(slider.children[0].style.left)-1000)+'px';
    }
    }, pause);
}

window.onload = function(e)
  {
  mySlider('ss1',1000,250,5000);
  }
