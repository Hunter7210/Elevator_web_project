function move_img(str) {
    var step=50; // change this to different step value
    switch(str){
    case "down":
    var x=document.getElementById('contain-elevador').offsetTop;
    x= x + step;
    document.getElementById('contain-elevador').style.top= x + "px";
    break;
    }
}