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
    let imageViewPort = [];// for draw images with random sources of images

    // multiply by 2 images sources and push it on the tab images
    imgSources.forEach(e => {
        images.push(e);
        images.push(e);   
    }); 
    
    // randomize images sources
    maxCard = images.length;
    // let test = 0;
    // while ( maxCard > 0){
    //     let randomSrc = Math.floor(Math.random()*maxCard);//select random source in images
    //     imageViewPort.push(images[randomSrc]); // push the images sources for the view port
    //     images.splice(images[randomSrc], 1); // delete the image sources for next random
    //     console.log(imagesViewport[test]);
    //     test++;
    //     maxCard--;
    // }
    

    // for (let i = 0; i < images.length ; i++){
    //     let img = document.createElement('img');//create image element for the dom
    //    img.setAttribute("src",images[i]);// set the source of the image with the tab images index
    //    img.setAttribute("alt","image " + i);// set alt
    //    img.setAttribute("onDragStart","return false");// forbiden the drag of image
    //     vp.appendChild(img);//insert img on the view port
    
    // }

  

    
}
start();