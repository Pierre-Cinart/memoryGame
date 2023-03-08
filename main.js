let hit = 0;
let imgSources =  [
    "./images/bear.png",
    "./images/cat.png",
    "./images/cow.png",
    "./images/dog.png",
    "./images/lezard.png",
    "./images/monkey.png",
    "./images/pig.png",
    "./images/rabbit.png", 
    "./images/rat.png"

];
let initViewport = 0;
// select the screen
const vp = document.querySelector('#view_port') ;

function start(){
    
    let images = [];
    console.log( "tab " + images.length);
    imgSources.forEach(e => {
        images.push(e);
        images.push(e);   
    }); 
    
    
    

    for (let i = 0; i < images.length ; i++){
        let img = document.createElement('img');//create image element for the dom
       img.setAttribute("src",images[i]);// set the source of the image with the tab images index
       img.setAttribute("alt","image " + i);// set alt
       img.setAttribute("onDragStart","return false");// forbiden the drag of image
        vp.appendChild(img);//insert img on the view port
    
    }

  

    
}
start();