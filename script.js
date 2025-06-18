var body=document.querySelector("body");
body.style.backgroundColor="coral";
const color=["red","orange","yellow","green","blue","indigo","violet"];
document.querySelector('button').addEventListener('click', function(){
    var colorIndex=parseInt(Math.random()*color.length);
    body.style.backgroundColor=color[colorIndex];
});