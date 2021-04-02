class Form {

  constructor()
   {
    this.input = createInput("Your Name");
    this.button = createButton('Play');
    this.greeting = createElement('h3');
  }
  hide()
  {
    
    this.input.hide();
    this.button.hide();
    this.greeting.hide();


  }

  display()
  {
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(displayWidth/2, 20);

    this.input.position(displayWidth/2, 100);
    this.button.position(displayWidth/2+100, 150);

    this.button.mousePressed(()=>{

      this.input.hide();
      this.button.hide();
      
      player.name =this.input.value();
      playerCount+=1;
      player.index =playerCount;

      player.update();
      player.updateCount(playerCount);
     
      this.greeting.html("Hello " +player.name )
      this.greeting.position(displayWidth/2, 100);
    });

  }
}