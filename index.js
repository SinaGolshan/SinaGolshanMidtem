"use strict"

resize()

window.addEventListener("resize", resize);

function resize(){
    let ms = document.getElementById('media-svg')
    let w = ms.clientWidth * 450/800;
    ms.style.height = w;
}


var media = document.getElementById('media-animate')
var features = document.getElementsByClassName('feature')

var id = null;
var features_id = new Array();

var animated = false;
var features_animated = new Array();
var left_pos = new Array();
for(let i= 0; i < features.length; i++){
    features_animated[i] = false;
    features_id[i] = null;
    left_pos[i] = 50;
}


window.addEventListener("scroll", animateMedia);
window.addEventListener("scroll", animateBlocks);



function animateMedia(){
    
    let pos = media.getBoundingClientRect().top - window.innerHeight + (Number(media.style.height) / 2);
    
    if (!animated && pos < 0 ){
        id = setInterval(revealMedia, 60)
        animated = true;
    }
    
}

function revealMedia(){
    let opacity = Number(media.style.opacity)
    if (opacity >= 1){
        clearInterval(id);
        return;
    }
    media.style.opacity = opacity + 0.1;
    
}


function animateBlocks(){
    for(let i= 0; i < features.length; i++){
        let pos = features[i].getBoundingClientRect().top - window.innerHeight + (Number(features[i].style.height))
        if(!features_animated[i] && pos < 0){
            features_id[i] = setInterval(revealFeature, 60, i)
            features_animated[i] = true;
        }
    }
}

function revealFeature(feature_index){
    let opacity = Number(features[feature_index].style.opacity);
    if (opacity >= 1){
        clearInterval(features_id[feature_index]);
        return;
    }
    if(opacity < 1){
        features[feature_index].style.opacity = opacity + 0.1;
    }
    
}