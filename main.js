var canvas= new fabric.Canvas('myCanvas');
      
player_x=10;
player_y=10;

block_image_width=30;
block_image_height=30;

var player_object="";
var block_image_object="";

 function player_update(){
     fabric.Image.fromURL("player.png",function(Img){
         player_object=Img;

         player_object.scaleToWidth(150);
         player_object.scaleToHeight(140);

         player_object.set({
             top:player_y,
             left:player_x
         });
         canvas.add(player_object);
     });
 }

 function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);

        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);

    if(e.shiftKey==true && keypressed=='80'){
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
         document.getElementById("current_width").innerHTML=block_image_width;
         document.getElementById("current_height").innerHTML=block_image_height;      
        }
    
        if(e.shiftKey==true && keypressed=='77'){
            block_image_width=block_image_width-10;
            block_image_height=block_image_height-10;
             document.getElementById("current_width").innerHTML=block_image_width;
             document.getElementById("current_height").innerHTML=block_image_height;      
            }
    
            if(keypressed=='38'){
                up();
                console.log("up");
            }
            
    if(keypressed=='87'){
        console.log("w");
        new_image("wall.jpg");
    }

    if(keypressed=='71'){
        console.log("g");
        new_image("gound.png");
    }

    if(keypressed=='84'){
        console.log("t");
        new_image("trunk.jpg");
    }

    if(keypressed=='76'){
        console.log("l");
        new_image("light_green.png");
    }

    if(keypressed=='82'){
        console.log("r");
        new_image("roof.jpg");
    }

    if(keypressed=='89'){
        console.log("y");
        new_image("yellow_wall.png");
    }

    if(keypressed=='68'){
        console.log("d");
        new_image("dark_green.png");
    }

    if(keypressed=='67'){
        console.log("c");
        new_image("cloud.jpg");
    }
}
function up()
{
    if(player_y >=0)
    {
    player_y = player_y - block_image_height;
    console.log("block image height = "+ block_image_height);
    console.log("when Up arrow key is pressed, x="+player_x + ", Y = "+player_y);
    canvas.remove(player_object);
    player_update();
    }
}

function down()
{
    if(player_y <=500)
    {
        player_y= player_y + block_image_height;
        console.log("block image height =" + block_image_height);
        canvas.log("when Down arrow key is pressed, X= " + player_x + " , Y ="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left()
{
    if(player_x >0)
    {
    player_x = player_x - block_image_width;
    console.log("block image width = "+ block_image_width);
    console.log("when Up arrow key is pressed, x="+player_x + ", Y = "+player_y);
    canvas.remove(player_object);
    player_update();
    }
}

function right()
{
    if(player_y <=850)
    {
        player_x = player_x + block_image_width;
        console.log("block image width =" + block_image_width);
        canvas.log("when Down arrow key is pressed, X= " + player_x + " , Y ="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}