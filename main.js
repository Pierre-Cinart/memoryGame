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
    //required variables
    let images = [];// for get the images sources multiply by 2
    let maxCard = 0;// for stop the while loop will be equal to images length
    let imagesViewPort = [];// for draw images with random sources of images

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


        _div.className=("box")
        //attributes and class for front face 
       img.setAttribute("src",imagesViewPort[i]);// set the source of the image with the tab imagesViewPort index
       img.setAttribute("alt","image " + i);// set alt
       img.setAttribute("onDragStart","return false");// forbiden the drag of image
        img.className = ("front");
        img.classList.add("notVisible");
        //attributes and class for back face 
        imgRevers.className = ("back");
        imgRevers.classList.add("Visible");

        vp.appendChild(_div);// create the div on view port
        _div.appendChild(img);//insert img on the view port
        _div.appendChild(imgRevers)
    
    }
  
}
start();