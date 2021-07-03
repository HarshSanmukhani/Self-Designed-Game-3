class Security{
    constructor(){
        this.access1 = createInput("");
        this.access1.position(windowWidth/2-100, windowHeight/2-25);
        this.access1.style('background', 'white');

        this.button1 = createButton('!!Start The Mission!!');
        this.button1.position(windowWidth/2-75, windowHeight/2+5);
        this.button1.style('background', 'lightgrey');    
    }

    display(){
        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1, this.access1.value())){
                this.button1.hide();
                this.access1.hide();
            }
        });
    }
};