let hit = 0;
let fxGood = new Audio('./audio/good.mp3');
let fxClick = new Audio('./audio/click.mp3');
let fxWrong = new Audio('./audio/wrong.mp3');
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

const vp = document.querySelector('#view_port') ;

let imagesViewPort = [];// for draw images with random sources of images
let imagesSelect = [];

let nbOfImages = 0;

function start(){
    //required variables
    let images = [];// for get the images sources multiply by 2
    let maxCard = 0;// for stop the while loop will be equal to images length
   

    // multiply by 2 images sources and push it on the tab images
    imgSources.forEach(e => {
        images.push(e);
        images.push(e);   
    }); 
    
    // randomize images sources
    maxCard = images.length;
    let test = 0;
    while ( maxCard > 0){
        let randomSrc = Math.floor(Math.random()*maxCard);//select random source in images
        imagesViewPort.push(images[randomSrc]); // push the images sources for the view port
        images.splice(randomSrc, 1); // delete the image sources for next random
        console.log(imagesViewPort[test]);
        test++;
        maxCard--;
    }
    

    for (let i = 0; i < imagesViewPort.length ; i++){
        let _div = document.createElement("div");//div for englober front and back face

        let img = document.createElement('img');//create image element for the dom
        let imgRevers = document.createElement('div');// create the back face

        nbOfImages++;


        _div.className=("box");
        //attributes and class for front face 
       img.setAttribute("src",imagesViewPort[i]);// set the source of the image with the tab imagesViewPort index
       img.setAttribute("alt","image " + i);// set alt
       img.setAttribute("onDragStart","return false");// forbiden the drag of image
       
        img.className = ("front");
        
        //attributes and class for back face 
        imgRevers.className = ("back");
        imgRevers.classList.add("visible");
        imgRevers.setAttribute('data-src',imagesViewPort[i]);
        imgRevers.setAttribute('onclick','reverse(this)');
        
        vp.appendChild(_div);// create the div on view port
        _div.appendChild(img);//insert img on the view port
        _div.appendChild(imgRevers);//insert the back face
    // div.
    }
     // Désactivez le clic droit et le glisser-déposer sur toutes les images
    // Sélectionnez toutes les images de votre page
const allImages = document.querySelectorAll('img');

    // Désactivez le clic droit sur chaque image
    allImages.forEach(function(image) {
        image.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});

    


    console.log("nb img :" + nbOfImages)
  
}


function reverse(c) {
    if (imagesSelect.length < 2) {
        fxClick.play();
        console.log("reverse");
        c.classList.replace("visible", "notVisible");
        imagesSelect.push(c);
        console.log("length : " + imagesSelect.length)

        if (imagesSelect.length == 2){
            setTimeout(verif,800);
            
            if ( imagesSelect[0].dataset.src == imagesSelect[1].dataset.src ){
                fxGood.play();
            }  else { 
                fxWrong.play();
            }
                
        } 
    }
}

function clean(){
    console.log('nb imgs :'+ nbOfImages)
    if (imagesSelect.length !=0 ) {
        imagesSelect = null;
        imagesSelect = [];
    }
}

function verif(){
    hit++;
    console.log('coups : '+ hit);
    
    if ( imagesSelect[0].dataset.src == imagesSelect[1].dataset.src ) {
        nbOfImages -=2;
       imagesSelect = null;
       imagesSelect = [];
        console.log("delete");
       
    } else {
        imagesSelect[0].classList.replace("notVisible", "visible");
        imagesSelect[1].classList.replace("notVisible", "visible");
    }
    if ( nbOfImages == 0 ) {
        win();
    } else {
       clean();
    }
}

function win(){
    console.log("win en : " + hit + 'coups');
    alert("vous avez gagné en : " + hit + 'coups');
    vp.innerHTML = "";
    
    // Reset 
    imagesViewPort = [];
    imagesSelect = [];
    nbOfImages = 0;
    hit = 0;
    //restart
    start();
}

start();