/************************************* 
Code is based on the walkthough here: http://thecodeplayer.com/walkthrough/matrix-rain-animation-html5-canvas-javascript 
**************************************/

// jQuery(document).ready(function(){
//   var navOffset = jQuery("topic").offset().top;

//     jQuery(window).scroll(function(){
//         var scrollPos = jQuery(window).scrollTop();

//         if (scrollPos >= navOffset){
//             jQuery("topic").addClass("fixed");
//         }else{
//             jQuery("topic").removeClass("fixed");
//         }

//     }); 

// });


var cnvs = document.getElementById('textflow');
var cntxt = cnvs.getContext('2d');

var chars = '123456789�☐�☐�☐��☐�☐�☐��☐��☐��☐�☐�???☐�☐�☐�☐��☐�☐�☐��☐��☐��☐�☐�???☐�udj.Zf#$$#$#%^***+++==VE@@@.datatempzxyYXcache;>'; // om
chars = chars.split(''); // make array
var font_size = 14;

// see: https://blog.codepen.io/2013/07/29/full-screen-canvas/
function resizeCanvas() {
  cnvs.width = window.innerWidth;
    cnvs.height = window.innerHeight + 3000;

};
window.onresize = resizeCanvas();
resizeCanvas();


var columns = cnvs.width/font_size;
var drops = [];
for(var x=0;x<columns;x++){
  drops[x]=1;
}

function draw(){
  
  cntxt.fillStyle = 'rgba(0,0,0,0.01)';
  cntxt.fillRect(0,0,cnvs.width,cnvs.height);
  cntxt.fillStyle = '#FFF';
  cntxt.font = font_size + 'px helvetica';
  
  for(var i=0;i<drops.length;i++){
    var txt = chars[Math.floor(Math.random()*chars.length)];
    if(Math.random()>0.8){
      cntxt.fillText(txt, drops[i]*font_size, i*font_size);
    }
    
    if(drops[i]*font_size>cnvs.width&&Math.random()>0.975){
      drops[i] = 0; // back to the top!   
    }
    drops[i]++;
  }
}

setInterval(draw, 10);

