class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
       }
  
    play(){
      form.hide();
      player.getPlayerInfo()
      var quizButton = createButton('Quiz');
      var greeting = createElement('h2');
      var playButton = createButton('Play Game');
    quizButton.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    playButton.position(displayWidth/2 -40, displayHeight/2-50);
    greeting.position(displayWidth-200,50);
    greeting.html("Hello " + playerName)
   playButton.mousePressed(()=>{
window.location.href="Game.html"


    })

    quizButton.mousePressed(()=>{
window.location.href="Quiz.html"
    })
    
       
    }
   

    end(){
      console.log("Game Ended");
    }
  }
  