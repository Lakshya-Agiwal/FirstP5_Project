function preload()
    {

    }
    function setup()
    {
        canvas = createCanvas(500,400);
        canvas.center();
        video = createCapture(VIDEO);
        
        
        video.size(200,200);
        video.hide();
        
    }
    function modelLoaded()
    {
        console.log(ml5.version);
    }
    function draw()
    {
        image(video,100,50,300,300);
        
        stroke(168,10,10);
        fill(168,10,10);
        
        circle(40,40,50);
        circle(460,40,50);
        circle(40,360,50);
        circle(460,360,50);

        stroke(50,168,82);
        fill(50,168,82);

        rect(63,27,375,25);
        rect (63,347,375,25);
        rect(27,63,25,275);
        rect(448,63,25,275);
        

    }
    function snap()
    {
        save("Image.jpg");
    }
